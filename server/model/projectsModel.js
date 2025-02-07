import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
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
      enum: [
        "education",
        "hunger",
        "poverty",
        "medicine",
        "housing",
        "health",
        "climate change",
        "water",
      ],
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    donations: [
      {
        amount: {
          type: Number,
          require: true,
        },
        donor: {
          firstName: { type: String, require: true },
          lastName: { type: String, require: true },
          email: { type: String, require: true },
        },
      },
    ],
  },
  { timestamps: { createdAt: "created_at" } }
);

const projectsModel = mongoose.model("Project", projectSchema);
export default projectsModel;
