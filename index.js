const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const credentials = {
  apiKey: "48c65775ef4bbabe32cbaace11df2c6f71b145c590a3dc429dd5c0790e616b69",
  username: "sandbox",
};

const AfricasTalking = require("africastalking")(credentials);
const airtime = AfricasTalking.AIRTIME;

app.post("/endpoint", (req, res) => {
  res.send("Hello, World!");
  const options = {
    recipients: [
      {
        phoneNumber: "+254726837210",
        currencyCode: "KES",
        amount: "5000",
      },
    ],
  };

  airtime
    .send(options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
