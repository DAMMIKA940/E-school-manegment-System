const Profile = require('../models/teacher');


exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};

exports.postProfile = async (req, res) => {
 
  const { name } = req.body;
  const { email } = req.body;
  
  const { grade } = req.body;
  const { Telephone } = req.body;
    
  const { area } = req.body;
  const { Subject } = req.body;
  const { description } = req.body;
  
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
  const profile = new Profile({
   
    name,
    email,
    imagePath,
    Telephone,
    description,
    area,
    Subject,
    grade

  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};