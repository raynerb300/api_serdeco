import { Sequelize } from "sequelize";
let DB_CONNECT_SUICHE = "postgres://usrreporte1:OFRhty3GQrEFpLC@10.0.210.37:5432/rec_f_bycn"
const opts = {
	dialectOptions: {
		useUTC: false, // for reading from database
	},
	timezone: '-04:00', // for writing to database
};

const db_suiche = new Sequelize (DB_CONNECT_SUICHE, opts)

db_suiche.authenticate().then(() => {
    console.log ("Conectado")
}).catch ((error) => {
    console.log ("Error de coneccion, no se pudo conectar con la base de datos!")
});
