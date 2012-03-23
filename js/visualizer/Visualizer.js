function Visualizer(columns, users) {
    this.canvas = null;
    this.columns = columns;
    this.users = users;

    this.createCanvas();
    this.drawColumns();
    this.drawUsers();
}

Visualizer.prototype.createCanvas = function () {
    this.canvas = Raphael(0, 110, 1100, 1000);
}

Visualizer.prototype.drawColumns = function () {
    var x = 40,
        canvas = this.canvas,
        c = [];

    $.each(this.columns, function (index, value) {
       x += 20;
       c[index] = canvas.rect(x, 0, value.width, '100%');
       c[index].attr('fill', value.color);
       c[index].attr('stroke', value.color);
       x += value.width;
       value.x = x;
    });

}

Visualizer.prototype.drawUsers = function () {
    var visualizer = this;
    $.each(this.users.getUsers(), function(index, user){
        visualizer.drawDataPoints(user.getPageViews());
    });
}

Visualizer.prototype.getColumnPosition = function (columnName) {
    var position = 0;
    $.each(this.columns, function(index, value){
        if(value.identifier === columnName){
            console.log('column x', value.x);
            position = value.x + value.width/2;
        }
    });
    return position;
}

Visualizer.prototype.drawDataPoints = function (pageViews) {
    var visualizer = this,
        y, 
        x,
        prevXY;
        
    $.each(pageViews, function(index, value){
        console.log('timestamp', value.timestamp);
        console.log('y', visualizer.users.currentTimestamp - value.timestamp);
        console.log('target', value.target);
        
        y = visualizer.users.currentTimestamp - value.timestamp;
        x = visualizer.getColumnPosition(value.target);
        console.log('X', x);
        
        visualizer.canvas.circle(x, y, 10);
        
        if(typeof prevXY !== 'undefined'){
            visualizer.drawLine({x:x,y:y}, prevXY);
        }
        
        prevXY = {
            x: x,
            y: y
        };
    });
}

Visualizer.prototype.drawLine = function (from, to) {
    var pathCoords = "M" + from.x + "," + from.y + "L" + to.x + "," + to.y,
        line;
    line = this.canvas.path(pathCoords);
    line.attr('stroke','rgba(255, 255, 255, 0.2)');
    line.attr('stroke-width', '2');
}