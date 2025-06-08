//
// GENERAL //
user_pref("content.notify.interval", 100000);

// GFX //
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("gfx.webrender.compositor", false);

// SMOOTH SCROLLING //
user_pref("mousewheel.acceleration.factor", 5);                                            // preset     5        ACCEL MAX SPEED 1-20           [10]
user_pref("mousewheel.acceleration.start", 4);                                             // preset     4        accel after x ticks            [-1]
user_pref("mousewheel.default.delta_multiplier_x", 100);                                   // preset   100           reset previous             [100]
user_pref("mousewheel.default.delta_multiplier_y", 100);                                   // preset   100           reset previous             [100]
user_pref("mousewheel.default.delta_multiplier_z", 100);                                   // preset   100           reset previous             [100]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false);             // preset  false       ignoring sys accel           [true]
user_pref("mousewheel.transaction.timeout", 1500);                                         // preset  1500           reset previous            [1500]
user_pref("mousewheel.min_line_scroll_amount", 0);                                         // preset     0       lines vary with accel            [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance", 3);                                // preset     3       keyboard matches mwheel          [5]
user_pref("toolkit.scrollbox.verticalScrollDistance", 3);                                  // preset     3       keyboard matches mwheel          [3]
user_pref("layers.async-pan-zoom.enabled", true);                                          // preset  true          smoothness boost           [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars", true);                           // preset  true          keyboard fix I            [false]
user_pref("apz.paint_skipping.enabled", false);                                            // preset  false         keyboard fix II v85        [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);                        // preset  true       report wheel in pixels       [false]
user_pref("layout.css.scroll-behavior.spring-constant", "300.0");                          // preset  "300"      css mimics gecko scroll        [250]
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);                        // preset   100      lame pref wreks settings        [100]
user_pref("general.smoothScroll.msdPhysics.enabled", false);                               // preset  false        no stutering fling         [false]
user_pref("general.smoothScroll.currentVelocityWeighting", "0.0");                         // preset  "0.0"          reduce stutter            [0.25]
user_pref("general.smoothScroll.durationToIntervalRatio", 400);                            // preset   400           reduce stutter             [200]
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.0");                        // preset  "0.0"          reduce stutter             [0.4]
user_pref("general.smoothScroll.lines.durationMaxMS", 300);                                // preset   300          arrows smoothing            [150]
user_pref("general.smoothScroll.lines.durationMinMS", 300);                                // preset   300          arrows smoothing            [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 300);                           // preset   300          mwheel smoothing            [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 300);                           // preset   300          mwheel smoothing             [50]
user_pref("general.smoothScroll.other.durationMaxMS", 150);                                // preset   150          home-end smoothing          [150]
user_pref("general.smoothScroll.other.durationMinMS", 150);                                // preset   150          home-end smoothing          [150]
user_pref("general.smoothScroll.pages.durationMaxMS", 200);                                // preset   200         pgup-pgdn smoothing          [150]
user_pref("general.smoothScroll.pages.durationMinMS", 200);                                // preset   200         pgup-pgdn smoothing          [150]
user_pref("general.smoothScroll.pixels.durationMaxMS", 300);                               // preset   300           pixel smoothing            [150]
user_pref("general.smoothScroll.pixels.durationMinMS", 300);                               // preset   300           pixel smoothing            [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 500);                           // preset   500         scrollbar smoothing          [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS", 500);                           // preset   500  

// STARTUP SETTINGS //
user_pref("accessibility.force_disabled", 1);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("app.update.background.scheduling.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.update.autoInstallEnabled", false);
user_pref("app.update.enabled", false);
user_pref("app.update.silent", true);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.silent", false);
user_pref("browser.tabs.closeWindowWithLastTab", true);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false); 
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); 
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("mail.shell.checkDefaultClient", false);
user_pref("mailnews.start_page.enabled", false);

// GEO LOCATION //
user_pref("geo.provider.ms-windows-location", false);
user_pref("browser.region.update.enabled", false);
user_pref("browser.region.network.url", "");
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("media.video_stats.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// LANGUAGE //
user_pref("intl.accept_languages", "en-US, en");

// AUTO UPDATE //
user_pref("app.update.background.scheduling.enabled", false);

// TELEMETRY //
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.optoutstudies.enabled", false);
user_pref("app.normandy.user_id", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.impressionId", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("default-browser-agent.enabled", false);
user_pref("dom.about_newtab_sanitization.enabled", true);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("toolkit.coverage.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_prefuser_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.geckoview.streaming", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.prioping.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("services.sync.telemetry.maxPayloadCount", 1);
user_pref("toolkit.telemetry.eventping.minimumFrequency", 6000);
user_pref("toolkit.telemetry.eventping.maximumFrequency", 6001);

// PRIVACY //
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("dom.push.connection.enabled", false);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.cookie.thirdparty.sessionOnly", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("pref.privacy.disable_button.cookie_exceptions", false);
user_pref("pref.privacy.disable_button.view_passwords_exceptions", false);

// NETWORK //
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// SEARCH BAR //
user_pref("keyword.enabled", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.scotchBonnet.enableOverride", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.urlbar.quicksuggest.scenario", "history");
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.calculator", false);
user_pref("browser.urlbar.unitConversion.enabled", false);
user_pref("browser.urlbar.suggest.engines", true);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("dom.text_fragments.create_text_fragment.enabled", true);
user_pref("browser.urlbar.groupLabels.enabled", false);

// DISK-DISK CACHE- MEMORY/ //
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.interval", 30000);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.cache.jsbc_compression_level", 3);
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
user_pref("image.mem.decode_bytes_at_a_time", 32768);




// PLUGINS-MEDIA-WEBRTC //
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("webgl.disabled", true);
user_pref("media.autoplay.default", 5);
user_pref("media.eme.enabled", true); // enable EME (Encrypted Media Extensions) for DRM content
user_pref("plugin.default.state", 0);
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.blocking_policy", 2);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.provider.enabled", false);
user_pref("media.gmp-gmpopenh264.visible", false);
// activate OpenH264 plugin if needed
// user_pref("media.gmp-gmpopenh264.enabled", true);
// user_pref("media.gmp-gmpopenh264.autoupdate", true);
// user_pref("media.gmp-gmpopenh264.provider.enabled", true);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");

// DOWNLOADS //
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.open_pdf_attachments_inline", true);

// TAB BEHAVIOR //
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

// COOKIES //
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.partition.serviceWorkers", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false);

// SHUTDOWN //
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("places.history.enabled", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", false);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.offlineApps", false);
user_pref("privacy.cpd.cookies", false);

// CFR //
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.ui.lastCategory", "addons://list/extension");
user_pref("browser.discovery.enabled", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutwelcome.enabled", false);

user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.search.update", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");

// QUICK SUGGETIONS //
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
user_pref("browser.urlbar.quicksuggest.showedOnboardingDialog", true);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// VPN //
user_pref("browser.vpn_promo.enabled", false);
user_pref("dom.vibrator.max_vibrate_ms", 0);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("layout.css.font-visibility.standard", 1);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("network.cookie.cookieBehavior", 5);
user_pref("network.manage-offline-status", false);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", true);
user_pref("permissions.isolateBy.userContext", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.firstparty.isolate", false);
user_pref("privacy.firstparty.isolate.block_post_message", false);
user_pref("privacy.query_stripping.enabled", true);

// ADDS //
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("services.settings.server", "https://s.%.c.invalid/v1");

// UI //
user_pref("ui.systemUsesDarkTheme", 1);

user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
//user_pref("privacy.userContext.enabled", true); Containers
//user_pref("privacy.userContext.ui.enabled", true); Container in settings

// THEME ADJUSTMENTS //
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.light-dark.enabled", true);
user_pref("browser.tabs.tabMinWidth", 66);
user_pref("browser.tabs.tabClipWidth", 86);
user_pref("browser.in-content.dark-mode", true);
user_pref("fp.tweak.autohide-bookmarks", false);
user_pref("fp.tweak.macos-button", false);
user_pref("fp.tweak.rounded-corners", false);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);

// FULLSCREEN NOTICE //
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

// COOKIE BANNER HANDLING //
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
user_pref("cookiebanners.service.enableGlobalRules", true);

// SAFE BROWSING //
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", " ");
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

// EXTENSIONS //
user_pref("extensions.quarantinedDomains.enabled", false);
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.autoDisableScopes", 15);
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// NETWORK //
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.dns.disableIPv6", true);
user_pref("network.notify.IPv6", false);
user_pref("network.gio.supported-protocols", "");
user_pref("network.file.disable_unc_paths", true);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("network.IDN_show_punycode", true);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.meta_refresh_when_inactive.disabled", true);
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dns.max_high_priority_threads", 8);
user_pref("network.ssl_tokens_cache_capacity", 10240);

// SPECULATIVE LOADING //
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

// EXPERIMENTAL //
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("dom.security.sanitizer.enabled", true);

// TRACKING PROTECTION //
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

// HTTPS-SSL-TLS-OSCP-CERTS-HPKP //
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode.upgrade_local", true);
user_pref("dom.security.https_first", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.warn_entering_weak", true);
user_pref("security.warn_leaving_secure", true);
user_pref("security.warn_viewing_mixed", true);
user_pref("security.pki.sha1_enforcement_level", 1);

// HEADERS-REFERERS //
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("browser.display.use_document_fonts", 1);
user_pref("font.blacklist.underline_offset", "");
user_pref("extensions.blocklist.enabled", false);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
user_pref("security.family_safety.mode", 0);
user_pref("layout.css.font-visibility", 1);
user_pref("layers.acceleration.disabled", true);

// MID STRONG PARAMETERS //
// JAVASCRIPT //
user_pref("identity.fxaccounts.enabled", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.ion", false);
user_pref("javascript.options.native_regexp", false);

// PASSWORDS //
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.http.windows-sso.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("editor.truncate_user_pastes", false);

// HOT SPOT //
user_pref("webgl.enable-webgl2", false);

// DNS over HTTPS-TRR //
user_pref("network.trr.default_provider_uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.bootstrapAddr", "1.1.1.1");
user_pref("network.trr.bootstrapAddress", "1.1.1.1");
user_pref("network.trr.confirmationNS", "cloudflare-dns.com");
user_pref("network.trr.credentials", "cloudflare-dns.com");
user_pref("Network.TRR.Custom_uri", "cloudflare-dns.com");
user_pref("network.trr.early-AAAA", true);
user_pref("network.trr.enable_when_nrpt_detected", true);
user_pref("network.trr.enable_when_proxy_detected", true);
user_pref("network.trr.enable_when_vpn_detected", true);
user_pref("Network.TRR.useGET", false);
user_pref("network.trr.wait-for-A-and-AAAA", true);
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.custom_uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.wait-for-portal", true);
user_pref("network.trr.allow-rfc1918", true);
user_pref("dom.push.enabled", false);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("permissions.delegation.enabled", false);
user_pref("browser.tabs.searchclipboardfor.middleclick", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);

// OVERRIDES //
user_pref("browser.theme.dark-private-windows", true); 
user_pref("nglayout.initialpaint.delay", 2000); #Works better with Dark Reader
user_pref("nglayout.initialpaint.delay_in_oopif", 2000);
user_pref("svg.context-properties.content.enabled", true); #Theming 
user_pref("widget.non-native-theme.scrollbar.style", 2); #Smaller scrollbar 
user_pref("xpinstall.signatures.required", false);#Install local addons 
user_pref("xpinstall.whitelist.required", false);
user_pref("network.early-hints.preconnect.max_connections", 20);
user_pref("network.dnsCacheEntries", -1); #Unlimited DNS cache queries
user_pref("network.dns.http3_echconfig.enabled", true); #ECH 
user_pref("network.dns.echconfig.fallback_to_origin_when_all_failed", false);
user_pref("network.dns.force_use_https_rr", true); #Force website to wait for HTTPS record
user_pref("network.dns.force_waiting_https_rr", true);
user_pref("network.dns.echconfig.enabled", true); 
user_pref("network.http.http3.alt-svc-mapping-for-testing", "doh3.dns.nextdns.io;h3=\":443\"; quicv=\"6b3343cf,1\""); Enable QUICv2
user_pref("network.http.http3.send_background_tabs_deprioritization", true); #HTTP3
user_pref("network.http.http3.version_negotiation.enabled", true);
user_pref("network.trr.async_connInfo", true); #TRR
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("network.trr.disable-ECS", false);
user_pref("network.trr.mode", 3);
user_pref("security.tls.ech.disable_grease_on_fallback", false);
user_pref("security.tls.ech.grease_http3", true);
user_pref("security.tls.ech.grease_probability", 100);
user_pref("browser.startup.preXulSkeletonUI", true); #Launch firefox instantly
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 2097152);
user_pref("browser.cache.memory.max_entry_size", 512000);
user_pref("network.http.rcwn.enabled", false); #Use RAM as networkcache
user_pref("network.early-hints.enabled", true); #Preloading pages
user_pref("network.early-hints.preconnect.enabled", true);
