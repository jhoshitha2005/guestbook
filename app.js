const express = require('express');
const app = express();
const port = 3000;

let messages = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const form = `
    <form method="POST">
      <input name="message" placeholder="Enter message" required />
      <button type="submit">Submit</button>
    </form>
    <ul>
      ${messages.map(msg => `<li>${msg}</li>`).join('')}
    </ul>
  `;
  res.send(form);
});

app.post('/', (req, res) => {
  messages.push(req.body.message);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Guestbook app running at http://localhost:${port}`);
});
