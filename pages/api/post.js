import connectDb from "../../lib/db";
import Post from "../../lib/models/post";
var User = require("../../lib/models/user");

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      const post = await Post.findById(id).populate("author").exec();
      res.json({ post });
    } else {
      const posts = await Post.find({}).populate("author").sort({ createdAt: -1 }).exec();
      res.json({ posts });
    }
  }
  if (req.method === "POST") {
    const { author, postdata } = req.body;
    const postDoc = await Post.create({ author, postdata });
    res.json(postDoc);
  }
}
