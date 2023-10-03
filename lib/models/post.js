import mongoose, { Schema, model, models } from "mongoose";
const PostSchema = new Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    images: { type: [String] },
    postdata: String,
  },
  {
    timestamps: true,
  }
);

const Post = models?.Post || model("Post", PostSchema);
export default Post;
