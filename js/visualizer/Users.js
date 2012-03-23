function Users (data) {
    this.data = data;
    this.currentTimestamp = data.currentTimestamp;
    this.users = [];
    
    this.generateUsers();
}

Users.prototype.generateUsers = function() {
    for(var i = 0; i < this.data.count; i++){
        var u = this.data.getObject(i);
        this.users.push(new User(u.sessionId, u.loggedIn, u.pageViews));
    }
}