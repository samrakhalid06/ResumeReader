import mongoose, {Schema} from 'mongoose'

let resumeSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  nationality: [{ type: String }],
  address: String,
  links: [{ type: String }],
  jobTitle: String,
  objectiveStatment: String,
  experience: [{
    title: String,
    organisation: String,
    startDate: Date,
    endDate: Date,
    additionalInfo: String,
  }],
  lineItems: [{
    lineItemType: {
      type: String,
      required : true
    },
    title: String,
    organisation: String,
    startDate: Date,
    endDate: Date,
    additionalInfo: String,
  }],
  skills: [{
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0
    },
    skill: {
      type: Schema.Types.ObjectId,
      ref: 'Skill'
    }
  }]
})

export default mongoose.model("Resume", resumeSchema)
