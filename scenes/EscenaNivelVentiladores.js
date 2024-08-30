
class EscenaNivelVentiladores extends Phaser.Scene {

	constructor() {
		super("EscenaNivelVentiladores");
	}

	create() {

		this.editorCreate();
	}

	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(638, 415, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 6.6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// franja_1
		const franja_1 = this.add.image(639, 423, "Franja");
		franja_1.scaleX = 0.74;
		franja_1.scaleY = 0.68;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(43, 42, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.7;
		nuclear_sharp.scaleY = 0.7;

		// desactivavionN
		const desactivavionN = this.add.image(347, 45, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		// turbinasApagadas
		const turbinasApagadas = this.add.image(189, 400, "TurbinasApagadas");
		turbinasApagadas.scaleX = 0.65;
		turbinasApagadas.scaleY = 0.65;

		// panelVentiladores
		const panelVentiladores = this.add.image(650, 400, "PanelVentiladores");
		panelVentiladores.scaleX = 0.65;
		panelVentiladores.scaleY = 0.65;

		// boton_Apagar
		const boton_Apagar = this.add.image(638, 565, "Boton Apagar");
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
                this.scene.start('Escenacandado');
            }, [], this);
		},this);

		// panelInccg
		const panelInccg = this.add.image(1078, 400, "PanelInccg");
		panelInccg.scaleX = 0.65;
		panelInccg.scaleY = 0.65;

		// mensajeCientifica
		const mensajeCientifica = this.add.image(254, 530, "MensajeCientifica");
		mensajeCientifica.scaleX = 0.7;
		mensajeCientifica.scaleY = 0.7;

		this.events.emit("scene-awake");
	}
}
