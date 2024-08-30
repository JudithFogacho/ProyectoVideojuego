
class Escenacandado extends Phaser.Scene {

	constructor() {
		super("Escenacandado");

	}

	create() {

		this.editorCreate();
	}
	
	editorCreate() {

		// pagina5
		const pagina5 = this.add.image(622, 359, "Pagina5");
		pagina5.scaleX = 0.75;
		pagina5.scaleY = 0.67;
		pagina5.setInteractive();
		pagina5.on('pointerdown', function (pointer) {
           this.scene.start('Escenallaves');
		},this);

		this.events.emit("scene-awake");
	}

}