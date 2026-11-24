
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/portfolio")
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Database Error:", error));

const HomeSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
  description: String,
  linkedin: String,
  cv: String,
  github: String,
  workingWith: [String]
});

const Home = mongoose.model("home", HomeSchema);

const homeData = {
  name: "Sayed Mohamed",
  title: "Full Stack Developer",
  image: "uploads/profile.jpg",
  description: "I'm a Full Stack Developer passionate about building web applications using Angular and Node.js.",
  linkedin: "https://linkedin.com/in/sayed-mohamed-81b66b290/",
  cv: "uploads/cv.pdf",
  github: "https://github.com/sayedmohameddev",
  workingWith: [
    "Angular",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB"
  ]
};

async function seedHome() {
  try {
    await Home.findOneAndUpdate(
      {},
      { $set: homeData },
      { upsert: true, new: true }
    );

    console.log("Home Seeded Successfully!");
  } catch (error) {
    console.log("Seeding Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedHome();
