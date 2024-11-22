import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    require: false,
  },
  supporters: {
    type: Number,
    require: false,
  },
  category: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  donations: [
    {
      amount: {
        type: Number,
        require: true,
      },
      donor: {
        type: String,
        require: true,
      },
    },
  ],
});

const projectsModel = mongoose.model("Project", projectSchema);
export default projectsModel;
