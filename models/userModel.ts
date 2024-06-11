import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    matricNumber: {
      type: String,
      required: [true, "Please provide Email"],
    },
    surname: {
      type: String,
      required: [true, "Please provide your first name "],
    },
    otherName: {
      type: String,
      required: [true, "Please provide matric number"],
    },
    email: {
      type: String,
      required: [true, "Please provide Email"],
    },
    level: {
      type: Number,
      required: [true, "Pleae Provide Level"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema);
