function Data () {
    this.loadData();
}

Data.prototype.loadData = function() {
    return {
        data: [
            {
                sessionId: 100,
                loggedIn: false,
                pageViews: [
                    {
                        target: 'homepage',
                        timestamp: 1332508172
                    },
                    {
                        target: 'skills',
                        timestamp: 1332508440
                    }
                ]
            }
        ]
    };
}