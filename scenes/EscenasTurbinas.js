class EscenasTurbinas extends Phaser.Scene {

	constructor() {
		super("EscenasTurbinas");
	}

	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(634, 359, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// frame_6
		const frame_6 = this.add.image(648, 372, "Frame 6");
		frame_6.scaleX = 0.75;
		frame_6.scaleY = 0.65;

		// ventana
		const ventana = this.add.image(639, 233, "Ventana");
		ventana.scaleX = 0.7;
		ventana.scaleY = 0.6;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(33, 30, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.6;
		nuclear_sharp.scaleY = 0.6;

		// desactivavionN
		const desactivavionN = this.add.image(325, 31, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;
		
		const palancas = this.add.image(1108, 590, "Palancas");
        palancas.scaleX = 0.7;
        palancas.scaleY = 0.7;

        const palancaInversa = this.add.image(1461, 572, "PalancaInversa");
        palancaInversa.scaleX = 0.7;
        palancaInversa.scaleY = 0.7;
        palancaInversa.setVisible(false);

        const mensajeAlerta = this.add.image(644, 368, "MensajeAlerta"); // Ajuste de coordenadas
        mensajeAlerta.scaleX = 0.65;
        mensajeAlerta.scaleY = 0.65;
        mensajeAlerta.setVisible(false);

        // Ajuste de profundidad para que mensajeAlerta esté encima de otros objetos
        mensajeAlerta.setDepth(1);

        palancas.setInteractive();
        mensajeAlerta.setInteractive();

        palancas.on('pointerdown', () => {
			mensajeAlerta.setVisible(true);
		});

		mensajeAlerta.on('pointerdown', () => {
			mensajeAlerta.setVisible(false);
			palancas.setVisible(false);
			palancaInversa.setVisible(true).setPosition(1110, 590);

			this.time.delayedCall(1000, () => {
				this.scene.start('EscenaNivelVentiladores');
			});
		});
    }

	create() {
		this.editorCreate();
	}
}
