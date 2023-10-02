import connectDb from "../../lib/db";
import User from "../../lib/models/user";

export default async function handler(req, res) {
  await connectDb();
  const { id } = req.query;

  if (req.method === "GET") {
    const user = await User.findById(id);
    res.json({ user });
  }
}
