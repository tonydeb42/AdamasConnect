import bcrypt from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import connectDb from "../../../lib/db";
import user from "../../../lib/models/user";

connectDb();

const handler = async (req, res) => {
  try {
    if (req.body.isLogged) {
      const foundUser = await user.findOne({ email: req.body.email });

      if (foundUser) {
        const response = await bcrypt.compare(req.body.password, foundUser.password);
        if (response) {
          const token = jwt.sign({ email: req.body.email }, "SECRET_KEY", {
            expiresIn: "3h",
          });
          const { password, ...rest } = foundUser._doc;
          const user = JSON.stringify(rest);
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, { httpOnly: true, maxAge: 60 * 60 })
          );
          res.json({ message: "Login Successful", success: true, token, user });
        } else {
          res.json({ message: "Incorrect password. Please try again." });
        }
      } else {
        res.json({ message: "You are not signed up. Please signup to continue." });
      }
    } else {
      const atIndex = req.body.email.indexOf("@");
      if (atIndex !== -1) {
        const domain = req.body.email.substring(atIndex + 1);
        if (domain && domain.toLowerCase() !== "stu.adamasuniversity.ac.in") {
          res.json({ message: "Please use your Adamas email Id for registration." });
        } else {
          const userFind = await user.findOne({ email: req.body.email });
          if (userFind) {
            res.json({ message: "User already registered. Please log in to continue." });
          } else {
            const hashedPass = await bcrypt.hash(req.body.password, 10);
            const newUser = new user({
              name: req.body.name,
              stream: req.body.stream,
              semester: req.body.semester,
              email: req.body.email,
              password: hashedPass,
            });
            newUser
              .save()
              .then(() => {
                const token = jwt.sign({ email: req.body.email }, "SECRET_KEY", {
                  expiresIn: "3h",
                });
                res.json({
                  message: "Sign Up Successful",
                  success: true,
                  token,
                  user: req.body.email,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      } else {
        res.json({ message: "Please enter a valid email Id." });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
