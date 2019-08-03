//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
// *
const date = require(__dirname + "/js/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let items = ["Buy Books", "Read Books", "Exercise"];
let workItems = [];

app.get("/", function(req, res) {
    var day = date.getDate();
    // var day = date.getDay();
    res.render("list", {listTitle: day, list: items});
});


app.post("/", function(req, res) {
    // console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list === "Work") {
        if(item != "") {
            workItems.push(item);
        }
        res.redirect("/work");
    } else {
        if(item != "") {
            items.push(item);
        }   
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", list: workItems});
});

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3000, function(req, res) {
    console.log("The server is on port 3000.");
});