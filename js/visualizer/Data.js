function Data (requestUrl, endpoint) {
    this.currentTimestamp = null;
    this.count = null;
    
    this.requestUrl = requestUrl;
    this.endpoint = endpoint;
    this.dataIsLoaded = false;
    
    this.loadData();
}

Data.prototype.parseData = function () {
    this.currentTimestamp = this.data.current_timestamp;
    this.count = this.data.data.length;
}

Data.prototype.getObject = function (index) {
   if(typeof this.data.data[index] !== 'undefined'){
       return this.data.data[index];
   }
   
   return false;
}

Data.prototype.jsonpCallback = function(data) {
    this.data = data;
    this.parseData();
}

Data.prototype.loadData = function() {
    var visualizer = this;
    $.ajax({
        url: 'http://owa1.bravenewtalent.com/api.php',
        type: 'GET',
        dataType: 'jsonp',
        context: visualizer,
        data: {
            owa_do: visualizer.endpoint,
            owa_apiKey: API_KEY,
            owa_siteId: SITE_ID,
            owa_format: 'json',
            owa_limit: 20,
        },
        success: function(data, textStatus, jqXHR){
    
            visualizer.data = data;
            //visualizer.data = visualizer.getFixtureData();
            visualizer.parseData();
            visualizer.dataIsLoaded = true;
        }
    });
}

Data.prototype.getFixtureData = function() {
    return {"current_timestamp":1332630917,"data":[{"sessionId":"1332630879364468890","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332630897425554149","timestamp":1332630897,"uri":"\/talent\/3978\/anthony-lee","target":"talent"},{"id":"1332630886349627118","timestamp":1332630886,"uri":"\/skills\/449\/php","target":"content"},{"id":"1332630883845040118","timestamp":1332630883,"uri":"\/search\/name\/php","target":"search"}]},{"sessionId":"1332630781002795982","views":[],"user":"Unverified User","isnewbie":"1","pageViews":[{"id":"1332630850986067148","timestamp":1332630850,"uri":"\/talent\/15430\/andrew-lawson","target":"talent"},{"id":"1332630804558532122","timestamp":1332630804,"uri":"\/home","target":"hom"},{"id":"1332630795289432122","timestamp":1332630795,"uri":"\/","target":"organisation"},{"id":"1332630785627314152","timestamp":1332630785,"uri":"\/onboarding","target":"organisation"}]},{"sessionId":"1332630361610492610","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332630364415743118","timestamp":1332630364,"uri":"\/","target":"organisation"}]},{"sessionId":"1332630074451669098","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332630078243928148","timestamp":1332630078,"uri":"\/","target":"organisation"}]},{"sessionId":"1332629451096416850","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332629452066263152","timestamp":1332629452,"uri":"\/Newton-Europe","target":"organisation"}]},{"sessionId":"1332629361467103328","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332629363783539152","timestamp":1332629363,"uri":"\/","target":"organisation"}]},{"sessionId":"1332628821336582033","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332628825310439118","timestamp":1332628825,"uri":"\/","target":"organisation"}]},{"sessionId":"1332628791648569794","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332628809519937148","timestamp":1332628809,"uri":"\/talent\/594\/sebastian-butschek\/profile","target":"talent"},{"id":"1332628749144728153","timestamp":1332628749,"uri":"\/talent\/594\/sebastian-butschek","target":"talent"}]},{"sessionId":"1332628741031480904","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332628736496050118","timestamp":1332628736,"uri":"\/talent\/215011\/sakhee-rani-ganatra","target":"talent"}]},{"sessionId":"1332628270651446347","views":[],"user":"Simon Hammond","isnewbie":"1","pageViews":[{"id":"1332628508332483152","timestamp":1332628508,"uri":"\/item\/2642044\/interesting-post-why-do-so-many-companies-think-their","target":"content"},{"id":"1332628494807675118","timestamp":1332628494,"uri":"\/home","target":"hom"},{"id":"1332628350563561149","timestamp":1332628350,"uri":"\/apple-inc","target":"organisation"},{"id":"1332628341204426122","timestamp":1332628341,"uri":"\/search\/name\/apple","target":"search"},{"id":"1332628281785586152","timestamp":1332628281,"uri":"\/item\/2641261\/there-are-four-essential-skills-required-to-pursue","target":"content"}]}]};
}