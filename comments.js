// Create web server
// 1. Create a new project folder
// 2. Run npm init -y
// 3. Run npm install express
// 4. Create a new file called server.js
// 5. Add the following code to server.js
// 6. Run node server.js
// 7. Open a web browser and go to http://localhost:3000
// 8. You should see Hello, World!

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// 9. Add the following code to server.js
// 10. Run node server.js
// 11. Open a web browser and go to http://localhost:3000
// 12. You should see Hello, World! and Hello, Comment!

app.get('/comment', (req, res) => {
  res.send('Hello, Comment!');
});
// 13. Add the following code to server.js
// 14. Run node server.js
// 15. Open a web browser and go to http://localhost:3000
// 16. You should see Hello, World! and Hello, Comment!
// 17. Open a web browser and go to http://localhost:3000/comment
// 18. You should see Hello, Comment!

app.get('/comment', (req, res) => {
  res.send('Hello, Comment!');
});

app.get('/comment/:id', (req, res) => {
  res.send('Hello, Comment!');
});
// 19. Add the following code to server.js
// 20. Run node server.js
// 21. Open a web browser and go to http://localhost:3000
// 22. You should see Hello, World! and Hello, Comment!
// 23. Open a web browser and go to http://localhost:3000/comment
// 24. You should see Hello, Comment!
// 25. Open a web browser and go to http://localhost:3000/comment/1
// 26. You should see Hello, Comment!

app.get('/comment/:id', (req, res) => {
  res.send(`Hello, Comment ${req.params.id}!`);
});
// 27
