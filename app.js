const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');


// const Review = mongoose.model('Review', {
//   title: String,
//   movieTitle: String
// });

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})


// app.js
//firstwith this project:

app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are fucking dope!' });
})

// app.js

// let reviews = [
//   { title: "Great Review", movieTitle: "Batman II" },
//   { title: "Awesome Movie", movieTitle: "Titanic" }
// ]

// INDEX
app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})
