// The address of this server connected to the network is:
// URL -> http://localhost:2040
// IP -> 127.0.0.1:2040

import express from "express";
// const express = require('express');
const app = express();
const PORT = 2040;

let data = ["nodeskin"]


//Middleware: This is a middleware that parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())


//HTTP VERBS && ROutes (or PATH)
//The method informs the nature of request and the route is a further sub-directory 
//(basically we direct the request to the body f code to respond appropiately and these routes are called endpoints)
//TYPE 1 WEBSITE ENDPOINT
app.get("/", (req, res) => {
    // This is endpoint Number 1 and its at / routes
    res.send(`<body style="background-color:lightblue; color:blue;">
        <h1>JSON data:</h1>
         <p>${JSON.stringify(data)}</p>
         <a href="/dashboard"> Dashboard </a>
        </body>`)
});

app.get("/dashboard", (req, res)=>{
    console.log("User requested the homepage", req.method)
res.send(`<body>
    <h1>Dashboard</h1>
    <a href="/"> Go to Home</a>
</body>
<script> console.log("This is my script") </script>
`)
})

//TYPE 2 API ENDPOINTS

app.get("/api/data", (req, res)=>{
    console.log("YAY i hit an API endpoint", req.method)
    res.send([data])
})

app.post("/api/data", (req, res)=>{
    const newData = req.body
    console.log(newData)
    data.push(newData.name)
    res.sendStatus(201)
})

// app.post("/api/data", (req, res) => {
//     const newData = req.body;
//     console.log(newData);
//     res.status(201).json({
//       message: "Data received!",
//       payload: newData,
//     });
//   })

app.delete("/api/data", (req, res) => {
    console.log("Deleted last element", req.method)
    data.pop()
    res.sendStatus(203)
})









app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
