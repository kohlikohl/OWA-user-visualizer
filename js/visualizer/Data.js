function Data (requestUrl, endpoint) {
    this.currentTimestamp = null;
    this.timestampDiff = 0;
    this.count = null;
    
    this.requestUrl = requestUrl;
    this.endpoint = endpoint;
    this.dataIsLoaded = false;
    
    //this.loadData();
}

Data.prototype.parseData = function () {
    this.currentTimestamp = this.data.current_timestamp;
    var localTimestamp = Math.round(new Date().getTime() / 1000);
    this.timestampDiff = this.currentTimestamp - localTimestamp;

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
    //this.dataIsLoaded = false;
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
            if(typeof FIXTURES !== 'undefined' && FIXTURES){
                visualizer.data = visualizer.getFixtureData();
            }
            visualizer.parseData();
            visualizer.dataIsLoaded = true;
        }
    });
}

Data.prototype.getFixtureData = function() {
    return {"current_timestamp":1332642467,"data":[{"sessionId":"1332639922499993518","views":[],"user":"Matthias Knoll","isnewbie":"1","pageViews":[{"id":"1332642443228349149","timestamp":1332642443,"uri":"\/","target":"organisation"},{"id":"1332642420684077118","timestamp":1332642420,"uri":"\/onboarding","target":"organisation"},{"id":"1332642362443012122","timestamp":1332642362,"uri":"\/employers\/industry\/Retail","target":"content"},{"id":"1332642281053615118","timestamp":1332642281,"uri":"\/employers\/industry\/Retail","target":"content"},{"id":"1332642270739380148","timestamp":1332642270,"uri":"\/starbucks","target":"organisation"},{"id":"1332642233079048118","timestamp":1332642233,"uri":"\/item\/2596098\/autogrill-and-starbucks-coffee-extend-partnership","target":"content"},{"id":"1332642219886454148","timestamp":1332642219,"uri":"\/starbucks","target":"organisation"},{"id":"1332642202574815122","timestamp":1332642202,"uri":"\/microsoft-india","target":"organisation"},{"id":"1332642197387827118","timestamp":1332642197,"uri":"\/search\/name\/microsoft","target":"search"},{"id":"1332642170603725118","timestamp":1332642170,"uri":"\/skills\/673\/business","target":"content"},{"id":"1332642157155008118","timestamp":1332642157,"uri":"\/talent\/3852\/kate-filmer","target":"talent"},{"id":"1332642146253308149","timestamp":1332642146,"uri":"\/onboarding","target":"organisation"},{"id":"1332641997666322153","timestamp":1332641997,"uri":"\/","target":"organisation"},{"id":"1332641995180587127","timestamp":1332641995,"uri":"\/","target":"organisation"},{"id":"1332641273390078152","timestamp":1332641273,"uri":"\/","target":"organisation"},{"id":"1332641203330562118","timestamp":1332641203,"uri":"\/skills\/852\/italian","target":"content"}]},{"sessionId":"1332641688310026324","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332641692481324118","timestamp":1332641692,"uri":"\/talent\/9475\/john-pughe\/profile","target":"talent"}]},{"sessionId":"1332641188549157501","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332641195853007148","timestamp":1332641195,"uri":"\/newsletter\/unsubscribe","target":"content"},{"id":"1332641192508186152","timestamp":1332641192,"uri":"\/newsletter\/unsubscribe\/email\/bernd.dorfmueller@gmail.com","target":"content"}]},{"sessionId":"1332640681994763314","views":[],"user":"null","isnewbie":"1","pageViews":[{"id":"1332640773039797152","timestamp":1332640773,"uri":"\/","target":"organisation"}]}]};
}