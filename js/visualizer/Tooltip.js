var Tooltip = function(point, text) {
	
	this.x = point.x;
	this.y = point.y;

	this.text = text;

	this.sanitizeString();
	
	if(this.text !== '' && this.y < 1000){
		this.drawTooltip();
	}
}
Tooltip.prototype.sanitizeString = function() {
	var pos = this.text.lastIndexOf('/');
	this.text = this.text.substring(pos+1);
}
Tooltip.prototype.drawTooltip = function() {
	var element = $('<div class="tooltip" style="top:' + this.y + 'px; left:' + this.x + 'px">' + this.text + '<span class="tail"></span></div>').appendTo('body');
	console.log(element.outerWidth());
	console.log(element.outerHeight());

	element.css({
		'top': '-=' + element.outerHeight(true) + 'px',
		'left': '-=' + element.outerWidth(true)/2 + 'px'
	});
}