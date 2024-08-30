
class EscenaEmergencia extends Phaser.Scene {

	constructor() {
		super("EscenaEmergencia");

	}

	create() {

		this.editorCreate();
	}
	
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(645, 365, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// franja
		const franja = this.add.image(636, 358, "Franja");
		franja.scaleX = 0.73;
		franja.scaleY = 0.7;

		// panelAguaApagado
		const panelAguaApagado = this.add.image(98, 363, "PanelAguaApagado");
		panelAguaApagado.scaleX = 0.65;
		panelAguaApagado.scaleY = 0.65;

		// panelReactorApagado
		const panelReactorApagado = this.add.image(578, 363, "PanelReactorApagado");
		panelReactorApagado.scaleX = 0.65;
		panelReactorApagado.scaleY = 0.65;

		// panelBtEmergencia
		const panelBtEmergencia = this.add.image(1029, 363, "PanelBtEmergencia");
		panelBtEmergencia.scaleX = 0.65;
		panelBtEmergencia.scaleY = 0.65;

		// boton_Apagar
		const boton_Apagar = this.add.image(1018, 528, "Boton Apagar");
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
                this.scene.start('EscenaBoton');
            }, [], this);
		},this);

		// mensajeBrnEmergencia
		const mensajeBrnEmergencia = this.add.image(325, 438, "MensajeBrnEmergencia");
		mensajeBrnEmergencia.scaleX = 0.75;
		mensajeBrnEmergencia.scaleY = 0.75;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(27, 28, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.6;
		nuclear_sharp.scaleY = 0.6;

		// desactivavionN
		const desactivavionN = this.add.image(326, 26, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		this.events.emit("scene-awake");
	}

}