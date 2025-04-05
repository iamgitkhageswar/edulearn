const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Submission:', { name, email, message });
  res.render('thankyou', { name });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));