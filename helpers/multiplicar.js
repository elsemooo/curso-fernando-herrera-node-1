const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base, l, h) => {
	try {
		let salida = "";
		let consola = "";
		let x = "x".blue;
		for (let i = 1; i <= h; i++) {
			consola += `${base} ${x} ${i} ${colors.blue("=")} ${colors.yellow(
				`${base * i}`
			)}\n`;
			salida += `${base} x ${i} = ${base * i}\n`;
		}
		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		if (l) {
			console.log("========================".green);
			console.log("     tabla de", base);
			console.log("========================".green);
			console.log(consola);
		}
		return `tabla-${base}.txt`.bgBlack.yellow;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

module.exports = {
	crearArchivo,
};
