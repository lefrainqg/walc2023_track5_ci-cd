const express = require('express');
const bodyParser = require('body-parser');
const List = require("collections/list");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = 3000;

var email_list = new List([]);

app.get('/', (req, res) => {
  res.send(' Track 5 - WALC 2023 - CI/CD LAB');
});

//GET endpoint - Greetings
app.get('/api/greetings', (req, res) => {
  res.json({ message: 'Bienvenido al Track 5 (Servicios en la Nube) - WALC 2023 - Guayaquil, Ecuador' });
});

//GET endpoint - Goodbye
app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Gracias por asistir al Track 5 (Servicios en la Nube) - WALC 2023 - Guayaquil, Ecuador. Nos vemos pronto!' });
});

//POST endpoint - Add new email to list
/*app.post('/api/addEmail', function(req, res) {
  var email = req.body.email
  email_list.push(email)
  res.json({ message: `Email ${email} added` });
});

//GET endpoint - Get all emails from list.
app.get('/api/listAllEmails', (req, res) => {
  var email_array = email_list.toArray()
  res.json({ message: `Emails added so far ${email_array}` });
});

//PUT endpoint - Modify an existing email.
app.put('/api/modifyEmail', (req, res) => {
  var current_email = req.body.current_email
  var new_email = req.body.new_email
  email_list.push(new_email)
  email_list.delete(current_email)
  var email_array = email_list.toArray()
  res.json({ message: `Email ${current_email} replaced by ${new_email}` });
});

//DELTE endpoint - Delete an existing email from list.
app.delete('/api/removeEmail', (req, res) => {
  var email = req.body.email
  email_list.delete(email)
  res.json({ message: `Email ${email} deleted` });
});*/

//Listening port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});