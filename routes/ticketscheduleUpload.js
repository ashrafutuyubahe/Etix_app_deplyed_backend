const express = require("express");
const Router = express.Router();
const multer = require("multer");
const XLSX = require("xlsx");
const mongoose = require("mongoose");
const dbconnection = require("../dbconnection");
const TicketScheduleModel = require("../models/scheduleModel");

// In-memory file handling setup for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



Router.post("/api/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    // Read and parse the Excel file from memory
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

   

    if (!(await TicketScheduleModel.insertMany(jsonData))) {
      return res.status(401).send("failed  to save  the file  data");
    }
    return res
      .status(200)
      .json({ message: "schedules have been  processed and saved successfully" });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ message: "Error processing file" });
  }
});

module.exports = Router;
