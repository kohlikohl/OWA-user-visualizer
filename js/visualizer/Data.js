function Data () {
    this.data = this.loadData();
    this.currentTimestamp = null;
    this.count = null;
    
    this.parseData();
}

Data.prototype.parseData = function () {
    this.loadData();
    this.currentTimestamp = this.data.current_timestamp;
    this.count = this.data.data.length;
}

Data.prototype.getObject = function (index) {
   if(typeof this.data.data[index] !== 'undefined'){
       return this.data.data[index];
   }
   
   return false;
}

Data.prototype.loadData = function() {
    return {
        current_timestamp: 1332508540,
        data: [
            {
                sessionId: 100,
                loggedIn: false,
                pageViews: [
                    {
                        id: 1,
                        target: 'homepage',
                        timestamp: 1332508172
                    },
                    {
                        id: 2,
                        target: 'skills',
                        timestamp: 1332508440
                    }
                ]
            },
            {
                sessionId: 110,
                loggedIn: false,
                pageViews: [
                    {
                        id: 1,
                        target: 'talent',
                        timestamp: 1332508172
                    },
                    {
                        id: 2,
                        target: 'employers',
                        timestamp: 1332508440
                    }
                ]
            }
        ]
    };
}