function Visualizer(columns) {
    this.canvas = null;
    this.columns = columns;

    this.createCanvas();
    this.drawColumns();
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