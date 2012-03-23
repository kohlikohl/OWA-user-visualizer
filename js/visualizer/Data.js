function Data () {
    this.loadData();
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
            }
        ]
    };
}