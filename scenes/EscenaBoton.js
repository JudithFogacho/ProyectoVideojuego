
class EscenaBoton extends Phaser.Scene {

	constructor() {
		super("EscenaBoton");

	}

	create() {

		this.editorCreate();
		
	}
	editorCreate() {
		let numClicks = 0;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(642, 356, 128, 128);
		rectangle_1.scaleX = 10.5;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// franjaEmergencia
		const franjaEmergencia = this.add.image(622, 365, "FranjaEmergencia");
		franjaEmergencia.scaleX = 0.75;
		franjaEmergencia.scaleY = 0.7;
		
		// Botón
		const botn = this.add.image(654, 370, "botn");
		botn.scaleX = 0.5;
		botn.scaleY = 0.5;
		botn.setInteractive();

		botn.on('pointerdown', () => {
			// Verificar si ya se han realizado cuatro clics
			if (numClicks < 4) {
				// Incrementar el contador de clics
				numClicks++;

				// Obtener una posición aleatoria dentro de la pantalla
				const randomX = Phaser.Math.Between(75, this.game.config.width);
				const randomY = Phaser.Math.Between(67, this.game.config.height);

				// Animar movimiento del botón a la posición aleatoria
				this.tweens.add({
					targets: botn,
					x: randomX,
					y: randomY,
					duration: 500, // Duración de la animación en milisegundos
					ease: 'Linear', // Función de ease para la animación
					onComplete: () => {
						console.log(`Movimiento a posición (${randomX}, ${randomY}) completado`);
					}
				});
			} else {
				this.scene.start('EscenaFinal');
			}
		});
       
		// nuclear_sharp
		const nuclear_sharp = this.add.image(29, 29, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.6;
		nuclear_sharp.scaleY = 0.6;

		// desactivavionN
		const desactivavionN = this.add.image(315, 29, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		this.events.emit("scene-awake");
	}

}

