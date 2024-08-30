class EscenaPalancas extends Phaser.Scene {

	constructor() {
		super("EscenaPalancas");
	}

	editorCreate() {

		const rectangle_1 = this.add.rectangle(646, 354, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 5.9;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// rectangle_2
		const rectangle_2 = this.add.image(637, 365, "Rectangle 2");
		rectangle_2.scaleX = 0.73;
		rectangle_2.scaleY = 0.68;

		// palanca_1
		const palanca_1 = this.add.image(123, 342, "Palanca1");
		palanca_1.scaleX = 0.6;
		palanca_1.scaleY = 0.6;

		// mensajeReactorPalanzcas
		const mensajeReactorPalanzcas = this.add.image(1020, 440, "MensajeReactorPalanzcas");
		mensajeReactorPalanzcas.scaleX = 0.7;
		mensajeReactorPalanzcas.scaleY = 0.7;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(34, 34, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.6;
		nuclear_sharp.scaleY = 0.6;

		// desactivavionN
		const desactivavionN = this.add.image(370, 34, "DesactivavionN");
		desactivavionN.scaleX = 0.35;
		desactivavionN.scaleY = 0.35;

		// palanca
		const palanca = this.add.image(315, 342, "Palanca1");
		palanca.scaleX = 0.6;
		palanca.scaleY = 0.6;
		palanca.setInteractive();

		palanca.on('pointerdown', () => {
			// Cambiar a la siguiente escena
			this.scene.start('EscenaEmergencia');
		});

		// palanca_2
		const palanca_2 = this.add.image(512, 342, "Palanca1");
		palanca_2.scaleX = 0.6;
		palanca_2.scaleY = 0.6;

		// palanca_invertida
		const palanca_invertida = this.add.image(-575, 632, "Palanca invertida");
		palanca_invertida.scaleX = 0.6;
		palanca_invertida.scaleY = 0.6;
		palanca_invertida.setVisible(false); // Ocultar la palanca invertida inicialmente

		// mensajeAlertaPalanca
		const mensajeAlertaPalanca = this.add.image(-713, 106, "MensajeAlertaPalanca");
		mensajeAlertaPalanca.scaleX = 0.7;
		mensajeAlertaPalanca.scaleY = 0.7;
		mensajeAlertaPalanca.setVisible(false); // Ocultar el mensaje de alerta inicialmente

		// Función para mostrar el mensaje de alerta en la posición deseada
		const mostrarMensajeAlerta = (x, y) => {
			mensajeAlertaPalanca.setPosition(x, y);
			mensajeAlertaPalanca.setVisible(true);
		};

		// Asignar evento de clic a palanca_1
		palanca_1.setInteractive();
		palanca_1.on('pointerdown', () => {
			mostrarMensajeAlerta(641, 359); // Mostrar el mensaje de alerta en la posición específica
		});

		// Asignar evento de clic a palanca_2
		palanca_2.setInteractive();
		palanca_2.on('pointerdown', () => {
			mostrarMensajeAlerta(641, 359); // Mostrar el mensaje de alerta en la posición específica
		});

		// Asignar evento de clic al mensaje de alerta para hacerlo desaparecer
		mensajeAlertaPalanca.setInteractive();
		mensajeAlertaPalanca.on('pointerdown', () => {
			mensajeAlertaPalanca.setVisible(false); // Ocultar el mensaje de alerta al hacer clic en él
		});

		this.events.emit("scene-awake");
	}
	
	create() {
		this.editorCreate();
	}
}

	// Crear una instancia de la escena
	const escenaPalancas = new EscenaPalancas();

	// Agregar la escena al juego
	const config = {
		type: Phaser.AUTO,
		width: 800,
		height: 600,
		scene: escenaPalancas
	};

const game = new Phaser.Game(config);