import mongoose, {Schema} from 'mongoose'

let skillRating = new Schema({
  rating: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    default: 0
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }
})

export default mongoose.model("SkillRating", skillRating)
