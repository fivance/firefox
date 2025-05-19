$repo = "fivance/firefox"
$branch = "main" 
$zipUrl = "https://github.com/$repo/archive/refs/heads/$branch.zip"

# Get temp download path
$zipPath = "$env:TEMP\firefox-tweaks.zip"

# Get Firefox profile directory
$profileBase = "$env:APPDATA\Mozilla\Firefox\Profiles"
$profile = Get-ChildItem -Path $profileBase -Directory | Where-Object { $_.Name -like "*.default-release" } | Select-Object -First 1

if (-not $profile) {
    Write-Host "Firefox default profile not found."
    exit 1
}

$profilePath = $profile.FullName
Write-Host "Found Firefox profile: $profilePath"

# Download the ZIP
Write-Host "⬇ Downloading GitHub repo ZIP..."
Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath

# Extract it
Write-Host "Extracting to profile folder..."
Add-Type -AssemblyName System.IO.Compression.FileSystem
$tempExtractPath = "$env:TEMP\ff-extract"
if (Test-Path $tempExtractPath) { Remove-Item -Recurse -Force $tempExtractPath }
[System.IO.Compression.ZipFile]::ExtractToDirectory($zipPath, $tempExtractPath)

# Move contents of the extracted folder into the profile directory (overwrite)
$extractedDir = Get-ChildItem $tempExtractPath | Where-Object { $_.PSIsContainer } | Select-Object -First 1
Copy-Item -Path "$($extractedDir.FullName)\*" -Destination $profilePath -Recurse -Force

# Cleanup
Write-Host "Cleaning up..."
Remove-Item $zipPath -Force
Remove-Item $tempExtractPath -Recurse -Force

Write-Host "Done! Restart Firefox to apply your tweaks."
