const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = "BJud9EwsvyvlSEgNDEZTMEj6C7XBT4gFFdLi76SWBq62G4BO8ODNunnQhvISTdMsGn98lRAtPWvZhEQK2lJ2M08";
const privateVapidKey = "s5vUzwyQmwkxDJXZ_P98E0Z7G81NW5LZrtbOmBNPBw8";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;
    console.log(subscription);

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "처갓집양념치킨" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

app.get('/test', (req, res) => {
    var subscription = {
  endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeSYHxxgxQ8kw9kABOd6__AmQS11Wo-HY2UXX_9_TPuSZmDyn65lc30jsWR-YGSN3zZe6R5LAAnMcfaUqpoYeBmSNef3dr6WW7Gi2bNUIh-ZP25HmD_IF0Ovu20orgahAE2_A-8Bawty8unSC5f8x-4pjSm_bE9M5YNP4PtS7VBQ3C6IA',
  keys: {
    auth: 'u90LUQDaUYUlYyQLjYg5cQ',
    p256dh: 'BC6B3q-IfM6jJle69kp6ERVxs7UmUeHc6DqZWIEm-Ld0lbqaoZjzrnGjrav1ybyb2Ud6qVZ07iOLgg6yoLXhAEo'
  }
    }
res.status(201).json({});

    const payload = JSON.stringify({ title: "처갓집양념치킨" });
    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
