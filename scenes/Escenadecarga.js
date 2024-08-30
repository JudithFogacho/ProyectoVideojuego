
class Escenadecarga extends Phaser.Scene {

	constructor() {
		super("Escenadecarga");
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle
		const rectangle = this.add.image(635, 357, "Rectangle");
		rectangle.scaleX = 0.75;
		rectangle.scaleY = 0.73;

		// ellipse_1
		const ellipse_1 = this.add.image(942, 407, "Ellipse 1");
		ellipse_1.scaleX = 0.68;
		ellipse_1.scaleY = 0.65;

		// puntoCarga
		const puntoCarga = this.add.image(577, 626, "PuntoCarga");
		puntoCarga.scaleX = 0.8;
		puntoCarga.scaleY = 0.73;

		// puntoCarga_1
        const puntoCarga_1 = this.add.image(599, 626, "PuntoCarga");
        puntoCarga_1.scaleX = 0.8;
        puntoCarga_1.scaleY = 0.73;

        this.events.emit("scene-awake");

        // Tween para hacer desaparecer puntoCarga_1
        this.tweens.add({
            targets: puntoCarga_1,
            scaleX: 0,
            scaleY: 0,
            duration: 100,
            delay: 100, // Retraso de 1000ms para empezar la animación
            onComplete: () => {
                puntoCarga_1.destroy(); // Una vez completada la animación, destruir el puntoCarga_1
            }
        });

        // Tween para hacer desaparecer puntoCarga después de puntoCarga_1
        this.tweens.add({
            targets: puntoCarga,
            scaleX: 0,
            scaleY: 0,
            duration: 300,
            delay: 1000, // Retraso de 2000ms para empezar la animación
            onComplete: () => {
                puntoCarga.destroy(); // Una vez completada la animación, destruir el puntoCarga
                this.scene.start('Escenanivelturbina'); // Pasar a la siguiente escena después de desaparecer puntoCarga
            }
        });
    }


	create() {

		this.editorCreate();
		this.time.delayedCall(2000, function () {
            this.scene.start('Escenanivelturbina');
        }, [], this);
	}

	/* END-USER-CODE */
}