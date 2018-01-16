const express = require( "express" );
const app = express(); // creates an instance of an express application
const nunjucks = require( "nunjucks" );
const routes = require("./routes");
app.use('/', routes);
app.use(express.static('public'))

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
var locals = {
		title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

// nunjucks.configure("views", {noCache: true});
// let res = nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

app.use(function (req, res, next) {
	console.log(req.method + ' ' +req.originalUrl)
	next()
	// do your logging here
	// call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

// app.get('/', (req, res, next) => {
// 	// console.log(req)
// 	res.render('index', locals);
// })


app.listen(3000, () => console.log('Example app listening on port 3000!'));
