const express = require('express');
const router = express.Router();

const Menu = require("./../models/menu");

router.post("/", async (req, res) => {
    try {
      const data = req.body; //assuming the request body contains the person data
  
      // create a new person document using the mongoose model
      const newMenu = new Menu(data);
  
      //Save the new person to the database
      const respone = await newMenu.save();
      console.log("data saved");
      res.status(200).json(reponse);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal Server Error" });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const data = await Menu.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.get('/:item', async(req,res)=>{

    try {
        const item = req.params.item;
        if(item == 'salad' || item == 'maincourse' || item == 'starter'){
              const respone = await Menu.find({ work: item});
              console.log('response fetched');
              res.status(200).json(respone);

        }else{
            res.status(404).json({error: 'invalid work type'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }

});


module.exports = router;