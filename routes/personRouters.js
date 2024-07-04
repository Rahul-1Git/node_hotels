const express = require('express');
const router = express.Router();
const Person = require("./../models/Person");

router.post('/', async(req,res)=>{
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const respone = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'internal Server Error'});
    }
});

router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/:worktype', async(req,res)=>{

    try {
        const worktype = req.params.worktype;
        if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
              const respone = await Person.find({ work: worktype});
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

router.put('/:id', async(req,res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        
        const reponse = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })

        if (!response){
            return res.status(404).json({ error: 'Person not found'});
        }

        console.log('data updated');
        res.status(500).json( { error: 'Internal Server Error' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.delete('/:id', async (req,res) =>{
    try {
        const personId = req.params.id;

        const reponse = await Person.findByIdAndDelete(personId);
        if(!reponse){
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('data deleted ');
        res.status(200).json( { message: 'person Deleted Successfully'});
        
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error'});
    }
})


module.exports = router;