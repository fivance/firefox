$repo = "fivance/firefox"
$branch = "main" 
$zipUrl = "https://github.com/$repo/archive/refs/heads/$branch.zip"

$zipPath = "$env:TEMP\firefox-tweaks.zip"

$profileBase = "$env:APPDATA\Mozilla\Firefox\Profiles"
$profile = Get-ChildItem -Path $profileBase -Directory | Where-Object { $_.Name -like "*.default-release" } | Select-Object -First 1

if (-not $profile) {
    Write-Host "Firefox default profile not found."
    exit 1
}

$profilePath = $profile.FullName

Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath

Write-Host "Extracting ZIP..."
Add-Type -AssemblyName System.IO.Compression.FileSystem
$tempExtractPath = "$env:TEMP\ff-extract"
if (Test-Path $tempExtractPath) {
    Remove-Item -Recurse -Force $tempExtractPath
}
[System.IO.Compression.ZipFile]::ExtractToDirectory($zipPath, $tempExtractPath)

$extractedDir = Get-ChildItem $tempExtractPath | Where-Object { $_.PSIsContainer } | Select-Object -First 1

Write-Host "Copying files to profile..."
robocopy "$($extractedDir.FullName)" "$profilePath" /E /IS /IT /NFL /NDL /NJH /NJS /NC /NS

Remove-Item $zipPath -Force
Remove-Item $tempExtractPath -Recurse -Force

Write-Host "Restart Firefox to apply your tweaks."
Start-Sleep -Seconds 3
