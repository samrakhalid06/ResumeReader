import { Router } from 'express';
import Resume from '../models/Resume';
import Skill from '../models/Skill';

var router = Router();

router.get('/', async (req, res) => {
  let skill = new Skill({
    skillType: 'Technology',
    title: 'Rails',
  })

  await skill.save()

  var resume = new Resume({
    name: 'Samra Khalid',
    email: 'samra.khalid@devsinc.com',
    phone: '1234567890',
    nationality: [ 'Pakistani' ],
    address: 'ABC street, Pakistan',
    jobTitle: 'Developer',
    objectiveStatment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    experience: [{
      title: 'Associate SE',
      organisation: 'Devsinc',
      startDate: new Date(2020, 9),
      endDate: Date.now(),
    }],
    skills: [{
      rating: 3,
      skill: {
        _id: skill.id
      }
    }]
  });
  await resume.save()
  await resume.populate({path: 'skills', populate: {path: 'skill'}})
  res.send(resume)
});

router.get('/:id', async (req, res) => {
  let resume = await Resume.findById(req.params.id)
  res.send(resume)
});

router.post('/', async (req, res) => {
  let resume = new Resume(req.body.resume)
  await resume.save
  res.send(resume)
});

export default router
