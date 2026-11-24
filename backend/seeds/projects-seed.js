
const mongoose = require("mongoose");

async function seedProjects() {
  try {
    await mongoose.connect("mongodb://localhost:27017/portfolio");

    console.log("Database Connected");

    const ProjectSchema = new mongoose.Schema({
      title: String,
      image: String,
      description: String,
      tech: [String],
      liveDemo: String,
      sourceCode: String
    });

    const Projects = mongoose.model("Project", ProjectSchema);

    const projectsData = [
      {
        title: "FreshCart E-Commerce",
        image: "uploads/freshcart.jpg",
        description: "An E-Commerce application built using Angular and .NET.",
        tech: ["Angular", "TypeScript", "C#", ".NET", "SQL Server"],
        liveDemo: "https://example.com",
        sourceCode: "https://github.com/sayedmohameddev"
      },
      {
        title: "AI Chat Application",
        image: "uploads/ai-chat.jpg",
        description: "An AI chat application with a responsive user interface.",
        tech: ["Angular", "TypeScript", "SASS", "HTML"],
        liveDemo: "https://ai-chat112.netlify.app",
        sourceCode: "https://github.com/sayedmohameddev"
      },
      {
        title: "Mealify Restaurant",
        image: "uploads/mealify.jpg",
        description: "A responsive restaurant website with dark mode.",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        liveDemo: "https://example.com",
        sourceCode: "https://github.com/sayedmohameddev"
      }
    ];

    await Projects.deleteMany({});
    await Projects.insertMany(projectsData);

    console.log("Projects Seeded Successfully!");

  } catch (error) {
    console.log("Seeding Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedProjects();
