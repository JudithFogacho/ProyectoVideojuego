
class EscenaNumeros extends Phaser.Scene {

	constructor() {
		super("EscenaNumeros");
	}

	create() {

		this.editorCreate();
	}
	
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(633, 363, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// imagenNumeros
		const imagenNumeros = this.add.image(641, 366, "ImagenNumeros");
		imagenNumeros.scaleX = 0.72;
		imagenNumeros.scaleY = 0.7;

		// encuentra_los_3_numeros_escondidos_Haz_clic_encima_del_n_mero
		const encuentra_los_3_numeros_escondidos_Haz_clic_encima_del_n_mero = this.add.image(647, 695, "Encuentra los 3 numeros escondidos Haz clic encima del número");
		encuentra_los_3_numeros_escondidos_Haz_clic_encima_del_n_mero.scaleX = 0.6;
		encuentra_los_3_numeros_escondidos_Haz_clic_encima_del_n_mero.scaleY = 0.6;

		// 1
		const numero1 = this.add.image(125, 587, "1");
		numero1.setInteractive();

		numero1.on('pointerdown', function () {
			numero1.setVisible(true);
			
			// Mostrar el número "3" en la posición x: 1228 y: 287
			const numero3 = this.add.image(1228, 287, "3");
			numero3.setInteractive();

			// Agregar evento de clic al número "3"
			numero3.on('pointerdown', function () {
				numero3.setVisible(true);

				// Mostrar el número "9" en la posición x: 519 y: 147
				const numero9 = this.add.image(519, 147, "9");
				numero9.setInteractive();

				// Agregar evento de clic al número "9" para cambiar de escena
				numero9.on('pointerdown', function () {
					this.scene.start("EscenaPalancas");
				}, this);
			}, this);
		}, this);

		// 3
		const numero3 =this.add.image(1411, 293, "3");

		// 9
		const numero9 =this.add.image(502, -83, "9");

		// nuclear_sharp
		const nuclear_sharp = this.add.image(32, 33, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.6;
		nuclear_sharp.scaleY = 0.6;

		// desactivavionN
		const desactivavionN = this.add.image(323, 35, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		this.events.emit("scene-awake");
	}
}