const express = require("express");
const app = express();
app.listen(3000);

const db = require("./db");



const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(" your server is created");
});

//import the router files
const personRouters = require('./routes/personRouters');
app.use('/person', personRouters);

//import the menu files
const menuitemRoutes = require('./routes/menuitemRoutes');
app.use('/menu', menuitemRoutes);


// POST route to add a person
// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //assuming the request body contains the person data

//     // create a new person document using the mongoose model
//     const newPerson = new Person(data);

//     //Save the new person to the database
//     const respone = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(reponse);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal Server Error" });
//   }
// });

// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body; //assuming the request body contains the person data

//     // create a new person document using the mongoose model
//     const newMenu = new Menu(data);

//     //Save the new person to the database
//     const respone = await newMenu.save();
//     console.log("data saved");
//     res.status(200).json(reponse);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal Server Error" });
//   }
// });

// GET method to get the person
// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/menu", async (req, res) => {
//   try {
//     const data = await Menu.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get('/person/:worktype', async (req,res) => {

//         try {
//             const worktype = req.params.worktype;
//             if(worktype == 'salad' || worktype == 'maincourse' || worktype == 'starter'){
//                   const respone = await Person.find({ work: worktype});
//                   console.log('response fetched');

//             }else{
//                 res.status(404).json({error: 'invalid work type'});
//             }
//         } catch (error) {
//             console.log(err);
//             res.status(500).json({ error: "Internal Server Error" });
//         }
   
// });