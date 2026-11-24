
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/portfolio")
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Database Error:", error));

const AboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  experience: String,
  projects: String,
  problem: String,
  technologies: String
});

const About = mongoose.model("About", AboutSchema);

const aboutData = {
  title: "About Me",
  description: "I'm a Full Stack Developer passionate about building modern and responsive web applications.",
  experience: "2+ Years",
  projects: "10+ Projects",
  problem: "I enjoy solving problems and building efficient software solutions.",
  technologies: "Angular, JavaScript, TypeScript, Node.js, Express.js, MongoDB"
};

async function seedAbout() {
  try {
    const about = await About.findOneAndUpdate(
      {},
      { $set: aboutData },
      { upsert: true, new: true }
    );

    console.log("About Seeded Successfully!");
    console.log(about);

  } catch (error) {
    console.log("Seeding Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedAbout();
