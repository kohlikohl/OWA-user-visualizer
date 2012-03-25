function Visualizer(columns, users) {
    this.setUp();

    this.canvas = null;
    this.columns = columns;
    this.users = users;

    this.createCanvas();
    this.drawColumns();
    this.drawUsers();
}

Visualizer.prototype.setUp = function() {
    this.DOT_DEFAULT_COLOR = 'rgba(120, 120, 120, 1)';
    this.COLOR_TRANSPARENT = 'transparent';
}

Visualizer.prototype.createCanvas = function () {
    this.canvas = Raphael(0, 110, 1800, 890);
}

Visualizer.prototype.drawColumns = function () {
    var x = 40,
        visualizer = this,
        c = [];

    $.each(this.columns, function (index, value) {
       x += 20;
       c[index] = visualizer.canvas.rect(x, 0, value.width, '100%');
       c[index].attr('fill', visualizer.COLOR_TRANSPARENT);
       c[index].attr('stroke', visualizer.COLOR_TRANSPARENT);
       value.x = x;
       x += value.width;
       
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
            position = value.x + value.width/2;
        }
    });
    return position;
}

Visualizer.prototype.getColumnColor = function (columnName) {
    var color = false;
    $.each(this.columns, function(index, value){
        if(value.identifier === columnName){
            color = value.color;
        }
    });
    return (color !== false) ? color : this.DOT_DEFAULT_COLOR;
}

Visualizer.prototype.drawDataPoints = function (pageViews) {
    var visualizer = this,
        y, 
        x,
        prevXY,
        lines = [],
        circles = [];
        
    $.each(pageViews, function(index, value){

        console.log('URI', value.uri);
        console.log('Target', value.target);
        console.log('-----------------------');
        console.log('');
        
        y = visualizer.users.currentTimestamp - value.timestamp;
        x = visualizer.getColumnPosition(value.target);

        if(typeof prevXY !== 'undefined'){
            lines.push([{x:x,y:y}, prevXY]);
        }
        
        circles.push({x:x,y:y, color: visualizer.getColumnColor(value.target)});
        
        prevXY = {
            x: x,
            y: y
        };
    });

    this.drawLines(lines);
    this.drawCircles(circles);
}

Visualizer.prototype.drawCircles = function (circles) {
    var visualizer = this,
        count = circles.length;

    $.each(circles,function(index, value){
        console.log(value);
        var c = visualizer.canvas.circle(value.x, value.y, 3);
        c.attr('fill', visualizer.DOT_DEFAULT_COLOR);
        c.attr('stroke', visualizer.darkenColor(visualizer.DOT_DEFAULT_COLOR, 0.9));
        c.attr('stroke-width', '0.5');

        if(index <= 0){
            c.attr('fill', value.color);
            c.attr('stroke', visualizer.darkenColor(value.color, 0.9));
            c.attr('r', 7);
        }
    });
}

Visualizer.prototype.drawLines = function (lines) {
    var visualizer = this;

    $.each(lines, function(index, value){
        console.log(value);
        visualizer.drawLine(value[0], value[1]);
    });
}
Visualizer.prototype.drawLine = function (from, to) {
    var pathCoords = "M" + from.x + "," + from.y + "L" + to.x + "," + to.y,
        line;
    line = this.canvas.path(pathCoords);
    line.attr('stroke','rgba(255, 255, 255, 0.2)');
    line.attr('stroke-width', '2');
}

Visualizer.prototype.darkenColor = function(color, amt) {
    var color = Raphael.color(color),
        c2 = Color(color.hex);

        return c2.darken(amt).hexString();
}