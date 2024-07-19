const express = require("express");
const ConnectDB = require("./config/db");
require("dotenv").config();
const userRoute = require("./routes/userRoutes");
const journalRoute = require("./routes/JournalRoutes");

const cors = require("cors");
const app = express();

app.use(express.json());

ConnectDB();
app.use(cors());
//const allowedOrigins = ['https://journal-apr.com'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true); // Allow requests with no origin
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
// app.options('*', cors());
//check api
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(`/api/users`, userRoute);
app.use("/api/journal", journalRoute);


app.listen(process.env.PORT, () =>
  console.log(`server started on port: ${process.env.PORT}`)
);
