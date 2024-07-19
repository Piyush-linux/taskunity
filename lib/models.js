import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    cover:{
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  { timestamps: true }
);

export const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
export const Task = mongoose.models?.Task || mongoose.model("Task", taskSchema);