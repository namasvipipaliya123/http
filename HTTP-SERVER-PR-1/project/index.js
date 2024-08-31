const http = require('http');
const fs = require('fs');

const port = 8090;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.end("Error creating index.html file");
            }
            else {
                res.end(`<img id="img" /> <h1 id="title">Wlcome to My Node-JS Website</h1> <p id="grid">You Can write you code here.</p> <span id="course">Back-end Devalopment</span>`);
            }
        });
    }
    else if(req.url === "/login"){
        res.end(`<h1>Login Page</h1> <p>You have an account please Login First</p> <span>Back-end Devalopment</span>`);
    }
    else if(req.url === "/signup"){
        res.end(`<h1>Signup Page</h1> <p>Please Signup For More Details..</p> <span>Back-end Devalopment</span>`);
    }
    else if(req.url === "/contact"){
        res.end(`<h1>Contact Us</h1> <p>Contact us on xyz142@gmail.com</p> <span>Back-end Devalopment</span>`);
    }
    else if(req.url === "/service"){
        res.end(`<h1>Service Page</h1> <p>Our Services to help you for your Success.</p> <span>Back-end Devalopment</span>`);
    }
    else{
        res.end("<h1>Error</h1>");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
}); 