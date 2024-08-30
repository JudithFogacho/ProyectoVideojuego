
class Escenanivelturbina extends Phaser.Scene {

	constructor() {
		super("Escenanivelturbina");
	}

	create() {

		this.editorCreate();
	}
	
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(643, 348, 128, 128);
		rectangle_1.scaleX = 10;
		rectangle_1.scaleY = 5.8;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// franja
		const franja = this.add.image(635, 357, "Franja");
		franja.scaleX = 0.75;
		franja.scaleY = 0.65;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(53, 39, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.7;
		nuclear_sharp.scaleY = 0.7;

		// panel1
		const panel1 = this.add.image(254, 363, "Panel1");
		panel1.scaleX = 0.65;
		panel1.scaleY = 0.65;

		// panelInccg
		const panelInccg = this.add.image(660, 363, "PanelInccg");
		panelInccg.scaleX = 0.65;
		panelInccg.scaleY = 0.65;

		// panelInccg_1
		const panelInccg_1 = this.add.image(1090, 363, "PanelInccg");
		panelInccg_1.scaleX = 0.65;
		panelInccg_1.scaleY = 0.65;

		// mensajeTurbinas
		const mensajeTurbinas = this.add.image(989, 426, "MensajeTurbinas");
		mensajeTurbinas.scaleX = 0.7;
		mensajeTurbinas.scaleY = 0.7;

		// boton_Apagar
		const boton_Apagar = this.add.image(219, 531, "Boton Apagar");
		boton_Apagar.scaleX = 0.65;
		boton_Apagar.scaleY = 0.65;
		boton_Apagar.setInteractive();
		boton_Apagar.on('pointerdown', function (pointer) {
            // Animar el botón al hacer clic
            this.tweens.add({
                targets: boton_Apagar,
                scaleX: 0.55,
                scaleY: 0.55,
                duration: 100,
                yoyo: true,
            });

            // Iniciar la siguiente escena después de la animación
            this.time.delayedCall(150, function () {
                this.scene.start('EscenasTurbinas');
            }, [], this);
		},this);

		// desactivavionN
		const desactivavionN = this.add.image(351, 38, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		this.events.emit("scene-awake");
	}

}
