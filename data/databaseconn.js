const sql = require("mysql2");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const Allowed_ip = process.env.ALLOWED_IP;
const Admins_ip = process.env.ADMINS_IP;
const Allowed_ips = JSON.parse(Allowed_ip);

const connection = sql.createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = {
	sql,
	Allowed_ip,
	Admins_ip,
	Allowed_ips,
	connection,
};
