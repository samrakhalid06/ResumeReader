import { MongoErrorLabel } from 'mongodb'
import mongoose, {Schema} from 'mongoose'

let resumeLineItemSchema = new Schema({
  lineItemType: {
    type: String,
    label: String,
    required : true
  },
  title: String,
  organisation: String,
  startDate: Date,
  endDate: Date,
  additionalInfo: Text,
})

export default mongoose.model("ResumeLineItem", resumeLineItemSchema)
