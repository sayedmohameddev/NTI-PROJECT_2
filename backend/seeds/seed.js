
const mongoose = require("mongoose");

// Database Connection
mongoose.connect("mongodb://localhost:27017/portfolio")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Error:", err));

// Skill Schema
const SkillSchema = new mongoose.Schema({
  category: String,
  items: [String]
});

const Skill = mongoose.model("Skill", SkillSchema);

// Seed Data
const skillsData = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Angular",
      "React",
      "Bootstrap",
      "Tailwind CSS",
      "SASS"
    ]
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "C#",
      "ASP.NET Core",
      "REST API"
    ]
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "SQL Server",
      "Mongoose",
      "Entity Framework Core"
    ]
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code"
    ]
  }
];

// Insert Data
async function seedDatabase() {
  try {
    for (const skill of skillsData) {
      await Skill.updateOne(
        { category: skill.category },
        { $set: skill },
        { upsert: true }
      );
    }

    console.log("Skills Seeded Successfully!");
  } catch (error) {
    console.log("Seeding Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedDatabase();
