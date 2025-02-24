const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(error => {
    // Error handling missing here!  Express doesn't automatically handle async errors
    console.error('An error occurred:', error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject(new Error('Something went wrong!'));
    }, 100);
  });
}