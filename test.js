
  var _paq = window._paq || [];
  //Store variables    
  var customURL = {{pageInfo.pageUri}};
  var pageTitle = {{pageInfo.pageTitle}}; 
  var applicationName = {{pageInfo.applicationName}};
  var TailoredData = {{TailoredData}};
  var userRole = {{userRole}};    
  var ref = {{documentReferrer}};
  var campaigns = {{campaignParams}};
      
  /**** Start URL Exceptions ****/   
  //make it lowercase
  customURL = customURL.toLowerCase();
  //Remove platsbanken search terms
  if (customURL.search(/\/annonser\?/g) != -1) {
    customURL = customURL.substring(0, customURL.indexOf('?'))+"/sok/sokfras";
  }
  //Remove site search
  if (customURL.search(/\/sok\?q/g) != -1) {
        customURL = customURL.substring(0, customURL.indexOf('?'))+"/sitesearch";
    }    
  //Remove url query params
  customURL = customURL.split("?")[0]; 
  //Remove platsbanken annons-id from URL  
  if (customURL.search(/\/annonser\/[0-9][0-9][0-9]/g) != -1) {
    customURL = customURL.substring(0, customURL.indexOf('annonser/')+9) + "annonssida";
  }       
  //Remove profile id´s      
  if(customURL.search(/\/mina-profiler\/(profil|forhandsgranska)\/asp\/[0-9]/g) != -1) {
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
  /**** End URL Exceptions ****/ 

   _paq.push(['setCustomUrl', customURL + campaigns]);      
  _paq.push(['setDocumentTitle',  pageTitle]);
  _paq.push(['setCustomDimension', 1, applicationName]);
  _paq.push(['setCustomDimension', 3, TailoredData]); 
  _paq.push(['setCustomDimension', 6, userRole]); 
  // _paq.push(['setCustomDimension', 5, 'TRUE']);

  var vpvReferrer = localStorage.getItem('lastURL');    
  if(vpvReferrer == null) 
    _paq.push(['setCustomDimension', 4,  ref]); 
  else
    _paq.push(['setCustomDimension', 4, vpvReferrer ]); 
    
  _paq.push(['enableHeartBeatTimer']);
  _paq.push(['trackPageView']);
  localStorage.setItem('lastURL', customURL);
  _paq.push(['enableLinkTracking']);

