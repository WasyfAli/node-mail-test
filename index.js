const express = require("express");
const { sendEmail } = require("./email");
const fs = require("fs");

const app = express();

//Send mail using array
var maillist = [
  // 'aarishkhan13111@gmail.com',
  'ali89313@gmail.com',
];
app.get("/send-email", (req, res) => {
  sendEmail(
    // `${maillist}`,
    "dctaliwasif@gmail.com",
    "Welcome message",
    "Welcome message content"
  );
  res.send("send email success");
});


//send mail using txt files
// app.get("/send-email", (req, res) => {
//   fs.readFile("maillist.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error reading email list");
//     }

//     const maillist = data.split("\n").filter((email) => email.trim());
//     console.log(maillist)
//     sendEmail(
//       maillist,
//       "Welcome message",
//       "Welcome message content"
//     );

//     res.send("send email success");
//   });
// });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
