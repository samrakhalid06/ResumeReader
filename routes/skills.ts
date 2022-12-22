import { Router } from 'express';
import Skill from '../models/Skill';

var router = Router();

/* GET home page. */
router.post('/', async (req, res, next) => {
  try {
    let skill = new Skill(req.body.skill)
    await skill.save()
    res.send(skill)
  }
  catch (error) {
    res.status(409)
    res.send(error)
  }
});

router.get('/', async (req, res, next) => {
  try {
    let skill = await Skill.find()
    res.send(skill)
  }
  catch (error) {
    res.status(404)
    res.send(error)
  }
});

export default router;
