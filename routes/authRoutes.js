const passport = require('passport');

module.exports = app => {
	app.get(
		// route path
		'/auth/google',
		passport.authenticate('google', {
			// define the information from user that we need
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
