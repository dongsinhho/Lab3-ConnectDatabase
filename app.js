const express = require('express');
const pug = require('pug');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const productRoute = require('./src/route/product.route');
const contactRoute = require('./src/route/contact.route');

app.set('view engine', 'pug');
app.set('views','./src/view');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static('./src/public'));

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL || 'mongodb+srv://dongsinhho:Sinhlolfo3123@cluster0.4gzsl.mongodb.net/lab2DB';


app.get('/', (req, res) => {
    res.render('index');
})

app.use('/product', productRoute);
app.use('/contact', contactRoute);

mongoose
	.connect(URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() =>
		app.listen(PORT, () => {
			console.log(`Server is running on PORT: ${PORT}`);
		})
	)
	.catch((error) => {
		console.log(error.message);
	});
