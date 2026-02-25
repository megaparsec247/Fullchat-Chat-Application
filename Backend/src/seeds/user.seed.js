import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
      email: "ananya.sharma@example.com",
      fullName: "Ananya Sharma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      email: "ishita.verma@example.com",
      fullName: "Ishita Verma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      email: "priya.patel@example.com",
      fullName: "Priya Patel",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      email: "sneha.reddy@example.com",
      fullName: "Sneha Reddy",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      email: "kavya.nair@example.com",
      fullName: "Kavya Nair",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      email: "meera.iyer@example.com",
      fullName: "Meera Iyer",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      email: "rhea.kapoor@example.com",
      fullName: "Rhea Kapoor",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      email: "diya.mehra@example.com",
      fullName: "Diya Mehra",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  
    // Male Users
    {
      email: "aarav.sharma@example.com",
      fullName: "Aarav Sharma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      email: "vivaan.patel@example.com",
      fullName: "Vivaan Patel",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      email: "aditya.verma@example.com",
      fullName: "Aditya Verma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      email: "krishna.reddy@example.com",
      fullName: "Krishna Reddy",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      email: "arjun.nair@example.com",
      fullName: "Arjun Nair",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      email: "rohan.kapoor@example.com",
      fullName: "Rohan Kapoor",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      email: "siddharth.mehra@example.com",
      fullName: "Siddharth Mehra",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];

  const seedDatabase = async () => {
    try {
      await connectDB();
  
      await User.insertMany(seedUsers);
      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };
  
  // Call the function
  seedDatabase();