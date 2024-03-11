const express = require('express');
const people = require('./people.json'); 
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Homepage' });
});

app.get('/profili', (req, res) => {
  res.render('profili', {
    title: 'PROFILI',
    people: people.profiles 
  });
});
app.get('/profile', (req, res) => {
  const person = people.profiles.find((p) => p.id === req.query.id);
  res.render('profile', {
    title: ` ${person.firstname} ${person.lastname}`,
    person,
  });
});
app.listen(10000, function () {
 console.log('Example app listening on port 3000!');
});