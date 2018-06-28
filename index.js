const express = require("express");
const app = express();
const hostname = null;
const port = 3000;
app.use(express.json());
let router = express.Router();
app.use('/api', router);


let scores = [{
    name: "Edwin",
    score: 50
}, {
    name: "David",
    score: 39
}];

router.get('/scores', function (req, res) {
    res.status(200);
    // res.set('Content-Type', 'application/json');
    console.log(res);
    res.send(scores);
});

// app.get('/*', function (req, res) {
//     res.statusCode = 404;
//     res.send("Error Not Found");
// });

router.post('/scores', function (req, res) {
    res.status(201);
    scores.push(req.body)
    scores.sort((a, b) => b.score - a.score)
    scores = scores.slice(0, 3)
    // res.set("Content-Type", "application/json")
    res.send(scores)

})

app.use(function(req, res, next){
    res.status(404).json({
        error: 'Not Found'
    })
    // if (req.accepts('json')){
    //     res.send({error: 'Not Found'});
    //     return;
    // }
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});