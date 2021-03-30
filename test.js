    var customURL = location.href.toLowerCase();
      //Remove platsbanken search terms
      if (customURL.search(/\/annonser\?/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('?'))+"/sok/sokfras";
      }
      if (customURL.search(/\/sok\?q/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('?'))+"/sitesearch";
      }      
      //Remove url query params
      customURL = customURL.split("?")[0];

      //Remove platsbanken annons-id from URL  
      if (customURL.search(/\/annonser\/[0-9][0-9][0-9][0-9][0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('annonser/')+9) + "annonssida";
      }   
      //Remove profile id´s  
      if(customURL.search(/\/(profil|forhandsgranska)\/asp\/[0-9]/g) != -1) {
         customURL = customURL.substring(0, customURL.indexOf('asp/')+4) + "profilsida";
      }      
      //Remove kandidat summering id´s summering
      if(customURL.search(/\/summering\/[0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('summering/')+10) + "profilsida";
      }
      if(customURL.search(/\/bekraftelse\/[0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('bekraftelse/')+12) + "profilsida";
      }      
      //Remove kandidat id´s  profil
      if(customURL.search(/\profil\/[0-9]/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('profil/')+7) + "profilsida";
      }     
      //Remove trailing slash
      customURL =  customURL.replace(/\/$/, "");  
      customURL = customURL.toLowerCase();

      console.log("customURL: " + customURL);
      console.log("campaigns: " + campaigns);
