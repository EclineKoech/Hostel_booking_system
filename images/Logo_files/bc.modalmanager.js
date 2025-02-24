﻿(function () {
    function ModalManager() {
        this.COOKIE_NAME = 'bc_utm_modal';
        this.KEY_IMMEDIATE = 'now';
        this.KEY_SHOW_ANY_MODAL = 'ShowEmailModal';
        this.KEY_MANDATORY_REGISTER_MODAL = 'mandatory-register-modal';
        this.KEY_SEARCH_PAGINATION_REGISTER_MODAL = 'search-pagination-register-modal';
        this.KEY_LANDING_MODAL = 'landing';
        this.KEY_PAGINATION_MODAL = 'pagination';
        this.KEY_MINI_ONBOARDING_MODAL = 'mini-onboarding';
        this.KEY_SHORTLIST_CALLOUT = 'shortlist-callout';
        this.KEY_LOCK_MODAL = 'mandatory';
        this.KEY_NO_MODAL = 'nomodal';
        this.KEY_INSIST_ON_T_AND_C_AGREEMENT_MODAL = 'agreement';
        this.MODAL_KEYS = [this.KEY_LANDING_MODAL, this.KEY_PAGINATION_MODAL, this.KEY_LOCK_MODAL, this.KEY_NO_MODAL, this.KEY_INSIST_ON_T_AND_C_AGREEMENT_MODAL];

        // Initialize the manager based off a cookie
        this.configure(getCookie(this.COOKIE_NAME));
    }

    /**
     * Check if any modal can be displayed
     * @returns {boolean} true for enabled
     */
    ModalManager.prototype.areModalsEnabled = function () {
        return sessionStorage && sessionStorage.getItem(this.KEY_SHOW_ANY_MODAL) !== 'False';
    };

    /**
     * Disables the showing of utm modals
     */
    ModalManager.prototype.disableModals = function () {
        if (typeof sessionStorage !== 'undefined' && !this.isLockEnabled()) {
            sessionStorage.setItem(this.KEY_SHOW_ANY_MODAL, 'False');
        }
    };

    ModalManager.prototype.isLandingModalEnabled = function () {
        return this.areModalsEnabled() && sessionStorage && sessionStorage.getItem(this.KEY_LANDING_MODAL) === 'true';
    };

    ModalManager.prototype.showSearchPaginationModal = function () {
        return this.areModalsEnabled() && sessionStorage && sessionStorage.getItem(this.KEY_SEARCH_PAGINATION_REGISTER_MODAL) !== 'false';
    };

    ModalManager.prototype.disableSearchPaginationModal = function () {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(this.KEY_SEARCH_PAGINATION_REGISTER_MODAL, 'false');
      }
    };

    ModalManager.prototype.isMakerModalEnabled = function () {
        return this.areModalsEnabled();
    };

    ModalManager.prototype.isImmediateEnabled = function () {
        return sessionStorage && sessionStorage.getItem(this.KEY_IMMEDIATE) === 'true';
    };

    ModalManager.prototype.isLockEnabled = function () {
        return sessionStorage && sessionStorage.getItem(this.KEY_LOCK_MODAL) === 'true';
    };

    ModalManager.prototype.isPaginationModalEnabled = function () {
        return this.areModalsEnabled() && sessionStorage
            && (sessionStorage.getItem(this.KEY_PAGINATION_MODAL) === 'true' || sessionStorage.getItem(this.KEY_PAGINATION_MODAL) === 'paginated');
    };

    ModalManager.prototype.isMiniOnboardingModalEnabled = function () {
        return localStorage && localStorage.getItem(this.KEY_MINI_ONBOARDING_MODAL) !== 'false';
    };

    ModalManager.prototype.disableMiniOnboardingModal = function () {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(this.KEY_MINI_ONBOARDING_MODAL, 'false');
        }
    };

    ModalManager.prototype.showMandatoryRegisterModal = function () {
      return sessionStorage &&
        (sessionStorage.getItem(this.KEY_MANDATORY_REGISTER_MODAL) !== 'false');
    };

    ModalManager.prototype.disableMandatoryRegisterModal = function () {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(this.KEY_MANDATORY_REGISTER_MODAL, 'false');
      }
    };

    ModalManager.prototype.insistOnTAndCAgreement = function () {
        return sessionStorage && sessionStorage.getItem(this.KEY_INSIST_ON_T_AND_C_AGREEMENT_MODAL) === 'true';
    };

    ModalManager.prototype.showModalOnLoad = function () {
        // If modal is mandatory
        if (this.isLockEnabled()) {
            return true;
        }
        
        return sessionStorage && sessionStorage.getItem(this.KEY_NO_MODAL) !== 'true';
    };

    /**
     * Return whether shortlist callout should be displayed
     * @returns {boolean} true if enabled, false otherwise
     */
    ModalManager.prototype.isShortlistCalloutEnabled = function() {
        return sessionStorage && sessionStorage.getItem(this.KEY_SHORTLIST_CALLOUT) !== 'false';
    }

    /**
     * Disable shortlist callout from displaying
     */
    ModalManager.prototype.disableShortlistCallout = function() {
        if (sessionStorage) {
            sessionStorage.setItem(this.KEY_SHORTLIST_CALLOUT, 'false');
        }
    }

    /**
     * Get/Set whether a pagination event has occured
     * @param {boolean} value Whether the event has occourred 
     * @returns {boolean} true for occourred
     */
    ModalManager.prototype.hasPaginated = function (value) {
        if (typeof value === 'undefined') {
            return this.areModalsEnabled() && sessionStorage && sessionStorage.getItem(this.KEY_PAGINATION_MODAL) === 'paginated';
        } else if (value === true) {
            sessionStorage.setItem(this.KEY_PAGINATION_MODAL, 'paginated');
        } else if (value === false) {
            sessionStorage.setItem(this.KEY_PAGINATION_MODAL, 'true');
        }
    };

    /**
     * Configures which modals need to be displayed
     * @param {string} value A comma separated list of values
     */
    ModalManager.prototype.configure = function (value) {
        if (typeof value !== 'undefined' && value !== null && sessionStorage) {
            var values = value.toString().toLowerCase().split(',');
            if (values.length === 0) return;

            // Match the value to the modal keys and saves them to session storage
            for (var i = 0; i < values.length; i++) {
                var key = values[i];

                if (key === this.KEY_IMMEDIATE || this.MODAL_KEYS.indexOf(key) !== -1) {
                    sessionStorage.setItem(key, 'true');
                }
            }
        }

        // Cleanup
        removeCookie(this.COOKIE_NAME);
    };

    window._bc = window._bc || {};
    window._bc.modalManager = new ModalManager();

    /**
     * Gets the value of a cookie
     * @param {any} cname the name of the cookie
     * @returns {string} value of a cookie, if found, or null
     */
    function getCookie(cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }
    
    /**
     * Remove a cookie
     * @param {any} cname The name of the cookie
     */
    function removeCookie(cname) {
        var expires = 'expires=' + new Date('1970').toUTCString();
        document.cookie = cname + '=;' + expires + ';path=/';
    }
})();