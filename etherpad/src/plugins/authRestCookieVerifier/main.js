import("etherpad.log");
import("plugins.authRestCookieVerifier.hooks");

function authRestCookieVerifierInit() {
 this.hooks = ['authUrl'];
 this.description = 'Verifies access rights to a URL by sending one of the users cookies to an external REST/JSON service.';
 this.authUrl = hooks.authUrl;
 this.install = install;
 this.uninstall = uninstall;
}

function install() {
 log.info("Installing authRestCookieVerifier");
}

function uninstall() {
 log.info("Uninstalling authRestCookieVerifier");
}

