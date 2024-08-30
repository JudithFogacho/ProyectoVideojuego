
class EscenaFinal extends Phaser.Scene {

	constructor() {
		super("EscenaFinal");
	}

	create() {

		this.editorCreate();
	}
	
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(632, 337, 128, 128);
		rectangle_1.scaleX = 10.5;
		rectangle_1.scaleY = 6.3;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// congratulation
		const congratulation = this.add.image(637, 372, "congratulation");
		congratulation.scaleX = 0.71;
		congratulation.scaleY = 0.7;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(33, 31, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.7;
		nuclear_sharp.scaleY = 0.7;

		// desactivavionN
		const desactivavionN = this.add.image(332, 30, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		this.events.emit("scene-awake");
	}
}
