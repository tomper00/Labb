    var customURL = location.href.toLowerCase();
    //Remove platsbanken search terms
    if (customURL.search(/\/annonser\?/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('?')) + "/sok/sokfras";
    }
    if (customURL.search(/\/sok\?q/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('?')) + "/sitesearch";
    }
    //Remove url query params
    customURL = customURL.split("?")[0];

    //Remove platsbanken annons-id from URL
    if (customURL.search(/\/annonser\/[0-9][0-9][0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('annonser/') + 9) + "annonssida";
    }
    //Remove profile id´s
    if (customURL.search(/\/(profil|forhandsgranska)\/asp\/[0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('asp/') + 4) + "profilsida";
    }
    //Remove kandidat summering id´s summering
    if (customURL.search(/\/summering\/[0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('summering/') + 10) + "kandidatsida";
    }
    //Remove kandidat id´s  profil
    if (customURL.search(/\/profil\/[0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('profil/') + 7) + "kandidatsida";
    }
    //Remove signera id´s
    if (customURL.search(/\/signera\/[0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('signera/') + 8) + "beslutsida";
    }

    //Remove begarersattning id´s
    if (customURL.search(/\/begarersattning\/[0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('begarersattning/') + 16) + "ersattningssida";
    }
    //Remove ersattning-for-resa id´s
    if (customURL.search(/\/kvittens\/[0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('kvittens/') + 9) + "kvittenssida";
    }
    //Remove planera aktivitet id´s
    if (customURL.search(/\/aktivitet\/[0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('aktivitet/') + 10) + "aktivitetssida";
    }

    //Remove samarbetshistorik rapport id´s
    if (customURL.search(/\/rapport\/[0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('rapport/') + 8) + "rapportsida";
    }

    //Remove signeraprogrambeslut rapport id´s
    if (customURL.search(/\/tack\/.*\/.*\/uga/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('tack/') + 5) + "uga";
    }

    //Remove signeraprogrambeslut rapport id´s
    if (customURL.search(/\/tack\/.*\/.*\/job/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('tack/') + 5) + "job";
    }

    //Remove trailing slash
    customURL = customURL.replace(/\/$/, "");
    console.log("customURL: " + customURL);
