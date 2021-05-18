const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');


// Delivery Model
const Delivery = require('../../Models/Delivery');

//Create delivery POST
router.post('/', async (req,res) => {
    const newDelivery = new Delivery (req.body);

    try {
        const delivery = await newDelivery.save();
        if(!delivery) throw Error('Something went wrong');
        res.status(200).json(delivery);

    } catch (error) {
        res.status(400).json({message:error})
    }
});

module.exports = router;

// GET all deliveries 
router.get('/', async (req,res) => {
try {
    const delivery = await Delivery.find();
    if(!delivery) throw Error ('No items');
    res.status(200).json(delivery);
} catch (error) {
    res.status(400).json({message:error})
}

});
// GET one delivery 
router.get('/:id', async (req,res) => {
    try {
        mongoose.set('useFindAndModify', false);
        const delivery = await Delivery.findById(req.params.id);
        if(!delivery) throw Error ('No such item');
        res.status(200).json(delivery);
    } catch (error) {
        res.status(400).json({message:error})
    }
    
    });

// DELETE delivery  api/delete/:id
router.delete('/:id', async (req,res) => {
  try {
      const delivery = await Delivery.findByIdAndDelete(req.params.id);
      if(!delivery) throw Error ('No Delivery found');

      res.status(200).json({success:true});

  } catch (error) {
      res.status(400).json({message:error}) 
  }
    
    });
    
    // UPDATE delivery  api/delete/:id
router.patch('/:id', async (req,res) => {
    try {
        const delivery = await Delivery.findByIdAndUpdate(req.params.id,req.body);
        if(!delivery) throw Error ('Error when updating');
  
        res.status(200).json({success:true});
  
    } catch (error) {
        res.status(400).json({message:error}) 
    }
      
      });
      