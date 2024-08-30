
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	game.scene.add("Preload", Preload);
	game.scene.add("EscenaInicio", EscenaInicio);
	game.scene.add("Escenadecarga", Escenadecarga);
	game.scene.add("Escenanivelturbina", Escenanivelturbina);
	game.scene.add("EscenasTurbinas", EscenasTurbinas);
	game.scene.add("EscenaNivelVentiladores", EscenaNivelVentiladores);
	game.scene.add("Escenacandado", Escenacandado);
	game.scene.add("Escenallaves", Escenallaves);
	game.scene.add("EscenaNivelAgua", EscenaNivelAgua);
	game.scene.add("EscenaTemperatura", EscenaTemperatura);
	game.scene.add("EscenaReactor", EscenaReactor);
	game.scene.add("EscenaNumeros", EscenaNumeros);
	game.scene.add("EscenaPalancas", EscenaPalancas);
	game.scene.add("EscenaEmergencia", EscenaEmergencia);
	game.scene.add("EscenaBoton", EscenaBoton);
	game.scene.add("EscenaFinal", EscenaFinal);
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}