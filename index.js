const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		//set expire time to 30 days (in milisec)
		maxAge: 30 * 24 * 60 * 60 * 1000,
		//used to encripty cookie
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

/*- 2 vagas para Desenvolvedor React Native

Oportunidades CLT e PJ

Interessados enviar o CV com o título da vaga para TALENTOS@CROSOFTEN.COM
*/
