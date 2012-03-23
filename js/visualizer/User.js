function User (id, loggedIn, pageViews) {
    this.id = id;
    this.loggedIn = loggedIn;
    this.pageViews = pageViews;
}

User.prototype.getPageViews = function() {
    if(this.pageViews.length > 0){
        return this.pageViews;
    }
    
    return false;
}