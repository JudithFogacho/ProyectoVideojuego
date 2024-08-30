
class EscenaReactor extends Phaser.Scene {

	constructor() {
		super("EscenaReactor");
	}

	create() {

		this.editorCreate();
	}

	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(642, 363, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// franja
		const franja = this.add.image(642, 365, "Franja");
		franja.scaleX = 0.73;
		franja.scaleY = 0.68;

		// panelAguaApagado
		const panelAguaApagado = this.add.image(188, 358, "PanelAguaApagado");
		panelAguaApagado.scaleX = 0.65;
		panelAguaApagado.scaleY = 0.65;

		// panelReactor
		const panelReactor = this.add.image(653, 358, "PanelReactor");
		panelReactor.scaleX = 0.65;
		panelReactor.scaleY = 0.65;

		// boton_Apagar
		const boton_Apagar = this.add.image(644, 523, "Boton Apagar");
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
                this.scene.start('EscenaNumeros');
            }, [], this);
		},this);


		// panelInccg
		const panelInccg = this.add.image(1097, 358, "PanelInccg");
		panelInccg.scaleX = 0.65;
		panelInccg.scaleY = 0.65;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(25, 25, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.5;
		nuclear_sharp.scaleY = 0.5;

		// desactivavionN
		const desactivavionN = this.add.image(394, 24, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		// mensajeReactor
		const mensajeReactor = this.add.image(269, 471, "MensajeReactor");
		mensajeReactor.scaleX = 0.7;
		mensajeReactor.scaleY = 0.7;

		this.events.emit("scene-awake");
	}
}

