const express = require("express");
const jsonBody = require("body/JSON");
const app = express();
const hostname = null;
const port = 3000;
app.use(express.json());

let scores = [{
    name: "Edwin",
    score: 50
}, {
    name: "David",
    score: 39
}];

app.get('/scores', function (req, res) {
    res.statusCode = 200;
    res.set('Content-Type', 'application/javascript');
    console.log(res);
    res.send(scores);
});

// app.get('/*', function (req, res) {
//     res.statusCode = 404;
//     res.send("Error Not Found");
// });

app.post('/scores', function (req, res) {
    res.statusCode = 201;
    
    
        scores.push(req.body)
        scores.sort((a, b) => b.score - a.score)
        scores = scores.slice(0, 3)
        res.set("Content-Type", "application/json")
        res.send(scores)
        
    
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});





