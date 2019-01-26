const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { SECRET_KEY } = require("../config");
const { createUser } = require("./userActions");


Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

const createToken = ({ email, first_name , _id}) => {

	const exp = new Date().addDays(1).getTime();

	const payload = {
		_id,
		email,
		first_name,
		exp
	};

	return jwt.sign(payload, SECRET_KEY);

};

const signup = (data) => {
	return new Promise((resolve, reject) => {
		createUser(data).then(
			(user) => {
				const token = createToken(user);
				resolve(token);

			}
		).catch(reject);


	});
};

module.exports = {
    signup,
}