var imagen;
var thumbnails;

function setup() {
	imagen = select('#main-img');
	thumbnails = selectAll('img','#thumbnails');
	for (let i = 0; i < thumbnails.length; i++) {
		thumbnails[i].mouseOver(changeSrc)
	}
}

function changeSrc() {
	imagen.attribute('src', this.attribute('src'))
}
