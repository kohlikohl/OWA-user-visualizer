function Visualizer(columns, users) {
    this.canvas = null;
    this.columns = columns;
    this.users = users;

    this.createCanvas();
    this.drawColumns();
    this.drawUsers();
}

Visualizer.prototype.createCanvas = function () {
    this.canvas = Raphael(0, 0, 1000, 1000);
}

Visualizer.prototype.drawColumns = function () {
    var x = 0,
        canvas = this.canvas,
        c = [];

    $.each(this.columns, function (index, value) {
       c[index] = canvas.rect(x, 0, value.width, '100%');
       c[index].attr('fill', value.color);
       c[index].attr('stroke', value.color);
       x += value.width;
    });

}

Visualizer.prototype.drawUsers = function () {
    
}

Visualizer.prototype.drawDataPoints = function () {
    
}