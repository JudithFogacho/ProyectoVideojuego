
class Escenallaves extends Phaser.Scene {

	constructor() {
		super("Escenallaves");
	}

	create() {

		this.editorCreate();
	}
	
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 357, 128, 128);
		rectangle_1.scaleX = 10.5;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// fondo_vd_1
		const fondo_vd_1 = this.add.image(634, 371, "Fondo vd 1");
		fondo_vd_1.scaleX = 0.73;
		fondo_vd_1.scaleY = 0.7;

		// lLaveIncorrecta1
		const lLaveIncorrecta1 = this.add.image(911, 550, "LLaveIncorrecta1");
		lLaveIncorrecta1.scaleX = 0.5;
		lLaveIncorrecta1.scaleY = 0.5;

		// llaveIncorrecta2
		const llaveIncorrecta2 = this.add.image(118, 381, "LlaveIncorrecta2");
		llaveIncorrecta2.scaleX = 0.6;
		llaveIncorrecta2.scaleY = 0.6;

		// llaveiIncorrecta3
		const llaveiIncorrecta3 = this.add.image(1038, 377, "LlaveiIncorrecta3");
		llaveiIncorrecta3.scaleX = 0.6;
		llaveiIncorrecta3.scaleY = 0.6;

		// llaveCorrecta
		const llaveCorrecta = this.add.image(829, 99, "LlaveCorrecta");
		llaveCorrecta.scaleX = 0.5;
		llaveCorrecta.scaleY = 0.5;

		// nuclear_sharp
		const nuclear_sharp = this.add.image(32, 30, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.65;
		nuclear_sharp.scaleY = 0.65;

		// desactivavionN
		const desactivavionN = this.add.image(333, 30, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		// mensajeAlertaCoorrecto
		const mensajeAlertaCoorrecto = this.add.image(670, 987, "MensajeAlertaCoorrecto");
		mensajeAlertaCoorrecto.scaleX = 0.64;
		mensajeAlertaCoorrecto.scaleY = 0.64;
		mensajeAlertaCoorrecto.setVisible(false);
		llaveCorrecta.setInteractive();

         llaveCorrecta.on('pointerdown', function () {
            mensajeAlertaCoorrecto.setVisible(true);

            // Animar el mensajeAlerta (desplazamiento)
            this.tweens.add({
                targets: mensajeAlertaCoorrecto,
                x: 657,  
                y: 363,  
                duration: 350,  
                ease: 'Linear',
                onComplete: function () {
					
                }
            });
        }, this);
		mensajeAlertaCoorrecto.setInteractive();
		mensajeAlertaCoorrecto.on('pointerdown', function (pointer) {
           this.scene.start('EscenaNivelAgua');
		},this);

		// mensajeAlertaLlaves
		const mensajeAlertaLlaves = this.add.image(669, -318, "MensajeAlertaLlaves");
		mensajeAlertaLlaves.scaleX = 0.64;
		mensajeAlertaLlaves.scaleY = 0.64;
		mensajeAlertaLlaves.setVisible(false); 

        lLaveIncorrecta1.setInteractive();

         lLaveIncorrecta1.on('pointerdown', function () {
            mensajeAlertaLlaves.setVisible(true);

            // Animar el mensajeAlerta (desplazamiento)
            this.tweens.add({
                targets: mensajeAlertaLlaves,
                x: 657,  
                y: 363,  
                duration: 400,  
                ease: 'Linear',
                onComplete: function () {
                }
            });
        }, this);
		mensajeAlertaLlaves.setInteractive();
        mensajeAlertaLlaves.on('pointerdown', function () {
           mensajeAlertaLlaves.setVisible(false);
		},this);
		
		//muestra la alerta cuando selecciona la llave incorrecta 2
		llaveIncorrecta2.setInteractive();

         llaveIncorrecta2.on('pointerdown', function () {
            mensajeAlertaLlaves.setVisible(true);

            // Animar el mensajeAlerta (desplazamiento)
            this.tweens.add({
                targets: mensajeAlertaLlaves,
                x: 657,  
                y: 363,  
                duration: 400,  
                ease: 'Linear',
                onComplete: function () {
					
                }
            });
        }, this);
		mensajeAlertaLlaves.setInteractive();
        // Agregar evento de clic al mensajeAlerta
        mensajeAlertaLlaves.on('pointerdown', function () {
           mensajeAlertaLlaves.setVisible(false);
		},this);
		
		//muestra la alerta cuando selecciona la llave incorrecta 3
		llaveiIncorrecta3.setInteractive();

         llaveiIncorrecta3.on('pointerdown', function () {
            mensajeAlertaLlaves.setVisible(true);

            // Animar el mensajeAlerta (desplazamiento)
            this.tweens.add({
                targets: mensajeAlertaLlaves,
                x: 657,  
                y: 363,  
                duration: 400,  
                ease: 'Linear',
                onComplete: function () {
					
                }
            });
        }, this);
		mensajeAlertaLlaves.setInteractive();
        // Agregar evento de clic al mensajeAlerta
        mensajeAlertaLlaves.on('pointerdown', function () {
           mensajeAlertaLlaves.setVisible(false);
		},this);

		this.events.emit("scene-awake");
	}

}