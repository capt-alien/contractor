const express = require('express')
const app = express()

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
  res.render('home', { msg: 'Handlebars are Cool!' });
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
