
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/portfolio")
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Database Error:", error));

const ContactSchema = new mongoose.Schema({
  email: String,
  location: String,
  github: String,
  linkedin: String,
  whatsapp: String
});

const Contacts = mongoose.model("Contact", ContactSchema);

const contactData = {
  email: "sayedmohameddev@gmail.com",
  location: "Cairo, Egypt",
  github: "https://github.com/sayedmohameddev",
  linkedin: "https://linkedin.com/in/sayed-mohamed-81b66b290/",
  whatsapp: "01150778216"
};

async function seedContact() {
  try {
    const contact = await Contacts.findOneAndUpdate(
      {},
      { $set: contactData },
      { upsert: true, new: true }
    );

    console.log("Contact Seeded Successfully!");
    console.log(contact);

  } catch (error) {
    console.log("Seeding Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedContact();
