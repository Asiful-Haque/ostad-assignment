const http = require('http');
const fs = require('fs');
const port = 5500;

// Create the server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Home Page');
    res.end();
  } else if (req.url === '/about') {
    res.write('About Page');
    res.end();
  } else if (req.url === '/contact') {
    res.write('Contact Page');
    res.end();
  } else if (req.url === '/file-write') {
    fs.writeFile('demo.txt', 'hello I am Asif', (err) => {
      if (err) {
        res.write('Error writing the file');
        res.end();
      } else {
        res.write('File "demo.txt" has been created with content: "hello I am Asif"');
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
