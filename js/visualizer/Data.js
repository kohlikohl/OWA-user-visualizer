function Data (requestUrl, endpoint) {
    this.currentTimestamp = null;
    this.count = null;
    
    this.requestUrl = requestUrl;
    this.endpoint = endpoint;
    
    this.loadData();
}

Data.prototype.parseData = function () {
    console.log(this.data.data.length);
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
    console.log(data);
    this.data = data;
    this.parseData();
}

Data.prototype.loadData = function() {
    var visualizer = this;
    console.log('load Data');
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
            owa_limit: 100
        },
        success: function(data, textStatus, jqXHR){
            console.log(data);
            visualizer.data = data;
            visualizer.parseData();
        }
    });
}