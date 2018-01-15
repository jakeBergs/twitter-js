const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {
	console.log(req.method + ' ' +req.originalUrl)
	next()
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

app.get('/', (req, res, next) => {
	// console.log(req)
})




app.listen(3000, () => console.log('Example app listening on port 3000!'));