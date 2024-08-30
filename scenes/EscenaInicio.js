
class EscenaInicio extends Phaser.Scene {

	constructor() {
		super("EscenaInicio");
	}

	create() {
		
		this.editorCreate();
	}

	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.image(643, 358, "Rectangle 1");
		rectangle_1.scaleX = 0.7;
		rectangle_1.scaleY = 0.7;

		// cientifica
		const cientifica = this.add.image(1191, 508, "Cientifica");
		cientifica.scaleX = 0.7;
		cientifica.scaleY = 0.7;

		// zombie
		const zombie = this.add.image(72, 508, "zombie");
		zombie.scaleX = 0.7;
		zombie.scaleY = 0.7;

		// sTARTOriginal
		const sTARTOriginal = this.add.image(649, 114, "STARTOriginal");
		sTARTOriginal.scaleX = 0.7;
		sTARTOriginal.scaleY = 0.7;

		// boton_startO
		const boton_startO = this.add.image(662, 474, "Boton startO");
		boton_startO.scaleX = 0.7;
		boton_startO.scaleY = 0.7;
		boton_startO.setInteractive();
		boton_startO.on('pointerdown', function (pointer) {
            // Animar el botón al hacer clic
            this.tweens.add({
                targets: boton_startO,
                scaleX: 0.55,
                scaleY: 0.55,
                duration: 100,
                yoyo: true,
            });

            // Iniciar la siguiente escena después de la animación
            this.time.delayedCall(150, function () {
                this.scene.start('Escenadecarga');
            }, [], this);
		},this);

		this.events.emit("scene-awake");
	}
}