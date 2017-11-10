var imagen;
var thumbnails;

function setup() {
	imagen = select('#main-img');
	let container = select('#thumbnails')
	if (container) {
		thumbnails = selectAll('.img-thumbnail','#thumbnails');
		print(thumbnails.length)
		for (let i = 0; i < thumbnails.length; i++) {
			thumbnails[i].mouseOver(changeSrc)
		}
	}
}

function changeSrc() {
	imagen.attribute('src', this.attribute('src'))
}
