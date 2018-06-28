const express = require("express");
const jsonBody = require("body/JSON");
const app = express();
const hostname = null;
const port = 3000;

let scores = [{
    name: "Edwin",
    score: 50
}, {
    name: "David",
    score: 39
}];

app.get('/scores', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/javascript');
    console.log(res);
    res.send(JSON.stringify(scores));
});

app.post('/scores', function (req, res) {
    res.statusCode = 201;
    jsonBody(req, res, (err, requestBody) => {
        scores.push(requestBody)
        scores.sort((a, b) => b.score - a.score)
        scores = scores.slice(0, 3)
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(scores))
        
    })
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});





// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         if (resources[req.url] === undefined) {
//             res.statusCode = 404;
//             res.end("ERROR NOT FOUND");
//         } else {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/plain');
//             resources[req.url] = JSON.stringify(scores)
//             const responseBody = resources[req.url];
//             res.end(responseBody);
//         }
//     } else if (req.method === "PUT") {
//         res.statusCode = 201;
//         textBody(req, res, (err, requestBody) => {
//             resources[req.url] = requestBody;
//             const responseBody = resources[req.url];
//             res.end(responseBody);
//         })
//     } else if (req.method === "POST") {
//         res.statusCode = 201;
//         jsonBody(req, res, (err, requestBody) => {
//             scores.push(requestBody)
//             scores.sort((a, b) => b.score - a.score)
//             scores = scores.slice(0, 3)
//             res.setHeader("content-type", "application/json")
//             res.end(JSON.stringify(scores))
//         })

//     }
// });