
class EscenaNivelAgua extends Phaser.Scene {

	constructor() {
		super("EscenaNivelAgua");
	}

	create() {

		this.editorCreate();
	}
	
	
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(641, 365, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// franja
		const franja = this.add.image(640, 363, "Franja");
		franja.scaleX = 0.72;
		franja.scaleY = 0.68;

		// panelVentiladores_1
		const panelVentiladores_1 = this.add.image(211, 363, "PanelVentiladores_1");
		panelVentiladores_1.scaleX = 0.65;
		panelVentiladores_1.scaleY = 0.65;

		// panelAgua
		const panelAgua = this.add.image(666, 363, "PanelAgua");
		panelAgua.scaleX = 0.65;
		panelAgua.scaleY = 0.65;

		// panelInccg
		const panelInccg = this.add.image(1090, 363, "PanelInccg");
		panelInccg.scaleX = 0.65;
		panelInccg.scaleY = 0.65;

		// mensajeAgua
		const mensajeAgua = this.add.image(236, 445, "MensajeAgua");
		mensajeAgua.scaleX = 0.65;
		mensajeAgua.scaleY = 0.65;

		// boton_Apagar
		const boton_Apagar = this.add.image(664, 527, "Boton Apagar");
		boton_Apagar.scaleX = 0.65;
		boton_Apagar.scaleY = 0.65;
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
                this.scene.start('EscenaTemperatura');
            }, [], this);
		},this);


		// nuclear_sharp
		const nuclear_sharp = this.add.image(34, 33, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.6;
		nuclear_sharp.scaleY = 0.6;

		// desactivavionN
		const desactivavionN = this.add.image(279, 32, "DesactivavionN");
		desactivavionN.scaleX = 0.25;
		desactivavionN.scaleY = 0.25;

		this.events.emit("scene-awake");
	}

}

