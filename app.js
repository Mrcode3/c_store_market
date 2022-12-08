// Load Node modules
const https = require('https');
const ejs = require("ejs");
const express = require("express");
const request = require("request");
// Initialise Express
const app = express();


// Set the view engine to ejs
app.set('view engine', 'ejs');
// Render static files
app.use(express.static("public"));
// To get data from home route
app.use(express.urlencoded({
  extended: true
}));

//--------------------------------------------

app.get("/", (req, res) => {
  res.render("home");
})
app.get("/about", (req, res) => {
  res.render("about");
})
app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jasonData = JSON.stringify(data);

  const url = "https://us1.api.mailchimp.com/3.0/lists/458577993d"

  const option = {
    method: "POST",
    auth: "Lin:5bbd57155780d1cc2788ad695cf0eea4-us1"
  }

  const request = https.request(url, option, (response) => {
    console.log(response.statusCode);
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", (data) => {
      console.log(JSON.parse(data))
    })
  })
  request.write(jasonData);
  request.end();
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);