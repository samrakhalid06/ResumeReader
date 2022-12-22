import mongoose, {Schema} from 'mongoose'

let skill = new Schema({
  skillType: {
    type: String,
    required : true
  },
  title: String
})

export default mongoose.model("Skill", skill)
