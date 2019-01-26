//archivo de conexion a base de datos

const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {

	dev: {
		SECRET_KEY: "master01",
		db: {
			url: "mongodb://luis:master01@ds211875.mlab.com:11875/quotation"
		},
		port: 3000
	},

	test: {

	},

	production: {

	}
};

module.exports = ENVS[NODE_ENV];