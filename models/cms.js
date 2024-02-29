import mongoose, { Schema } from "mongoose";

const cmsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['general', 'technology', 'fashion'],
      default: 'general',
    },
    pub_date: {
      type: Date,
      required: true,
    },
    mod_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['published', 'draft', 'archived'],
      default: 'published',
    },
    action: String,
  },
  {
    timestamps: true,
  }
);

const Cms = mongoose.models.Cms || mongoose.model("Cms", cmsSchema);

export default Cms;
