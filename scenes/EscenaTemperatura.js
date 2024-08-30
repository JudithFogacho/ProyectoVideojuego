

class EscenaTemperatura extends Phaser.Scene {

	constructor() {
		super("EscenaTemperatura");

	}

	create() {

		this.editorCreate();
		
		
	}
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(641, 363, 128, 128);
		rectangle_1.scaleX = 10.3;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3488605;

		// fondo_para_agua_1
		const fondo_para_agua_1 = this.add.image(648, 366, "Fondo para agua 1");
		fondo_para_agua_1.scaleX = 0.73;
		fondo_para_agua_1.scaleY = 0.68;

		// termometro_1
		const termometro_1 = this.add.image(268, 338, "termometro 1");
		termometro_1.scaleX = 0.55;
		termometro_1.scaleY = 0.55;

		// termometroCongelado
		const termometroCongelado = this.add.image(1043, 338, "TermometroCongelado");
		termometroCongelado.scaleX = 0.55;
		termometroCongelado.scaleY = 0.55;

		// evacua_el_agua_caliente_del_sistemas
		const evacua_el_agua_caliente_del_sistemas = this.add.image(657, 119, "Evacua el agua caliente del sistemas");
		evacua_el_agua_caliente_del_sistemas.scaleX = 0.6;
		evacua_el_agua_caliente_del_sistemas.scaleY = 0.6;

		// agua_pixel_1
		const agua_pixel_1 = this.add.image(650, 353, "agua pixel 1");
		agua_pixel_1.scaleX = 0.5;
		agua_pixel_1.scaleY = 0.5;

		// component_1
		const component_1 = this.add.image(1087, 564, "Component 1");
		component_1.scaleX = 0.5;
		component_1.scaleY = 0.5;
		component_1.setInteractive();

        // Agregar evento de clic al componente
			component_1.on('pointerdown', function () {
			// Ocultar el componente actual
			component_1.setVisible(false);
			
				const component = this.add.image(1087, 564, "Component");
				component.scaleX = 0.5;
				component.scaleY = 0.5;
				
				this.time.delayedCall(400, function() {
					this.scene.start('EscenaReactor');
				}, [], this);
			}, this);
		
		// component
		const component = this.add.image(318, 564, "Component");
        component.scaleX = 0.5;
        component.scaleY = 0.5;
        component.setInteractive();

        // Agregar evento de clic al componente
			component.on('pointerdown', function () {
			// Ocultar el componente actual
			component.setVisible(false);

			// Mostrar el nuevo componente
			const component_1 = this.add.image(318, 564, "Component 1");
			component_1.scaleX = 0.5;
			component_1.scaleY = 0.5;

			// Animar el mensaje de alerta para que aparezca después de mostrar el nuevo componente
			const mensajeAlertAgua = this.add.image(638, -258, "MensajeAlertAgua");
			mensajeAlertAgua.scaleX = 0.65;
			mensajeAlertAgua.scaleY = 0.65;

			this.tweens.add({
				targets: mensajeAlertAgua,
				y: 363, // Coordenada y final
				duration: 400, // Duración de la animación en milisegundos
				ease: 'Linear',
				onComplete: function () {
					// Puedes agregar más lógica aquí después de la animación
				}
			});

			// Agregar evento de clic al mensaje de alerta para ocultarlo cuando se hace clic en él
			mensajeAlertAgua.setInteractive();
			mensajeAlertAgua.on('pointerdown', function () {
				mensajeAlertAgua.setVisible(false);
			});
		}, this);

		
		// nuclear_sharp
		const nuclear_sharp = this.add.image(39, 40, "nuclear-sharp");
		nuclear_sharp.scaleX = 0.6;
		nuclear_sharp.scaleY = 0.6;

		// desactivavionN
		const desactivavionN = this.add.image(333, 38, "DesactivavionN");
		desactivavionN.scaleX = 0.3;
		desactivavionN.scaleY = 0.3;

		// mensajeAlertAgua
		const mensajeAlertAgua = this.add.image(638, -258, "MensajeAlertAgua");
		mensajeAlertAgua.scaleX = 0.65;
		mensajeAlertAgua.scaleY = 0.65;
		
		
		this.events.emit("scene-awake");
	}

}

