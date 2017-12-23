const passport = require("passport");

module.exports = app => {
	app.get(
		// route path
		"/auth/google",
		passport.authenticate("google", {
			// define the information from user that we need
			scope: ["profile", "email"]
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));
};
