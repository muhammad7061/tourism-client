import TourModel from "../models/TourModel.js";

export const TourRegsiter = async (req, res) => {
  try {
    const {
      title,
      country,
      city,
      desc,
      days,
      price,
      startDay,
      endDay,
      category,
    } = req.body;

    const NewTour = new TourModel({
      title,
      country,
      city,
      desc,
      days,
      price,
      startDay: new Date(startDay),
      endDay: new Date(endDay),
      category,
      image: req.file.filename,
    });
    const SaveTour = await NewTour.save();
    if (SaveTour) {
      res.status(201).json({
        success: true,
        message: "Tour created successfully!",
        data: SaveTour,
      });
    }
  } catch (error) {
    console.error("Mongoose Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const ReadAllTour = async (req, res) => {
  try {
    const read = await TourModel.find();
    if (!read || read.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No tours found in the database",
      });
    }
    res.status(200).json({
      success: true,
      data: read,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// --- GET SINGLE TOUR ---
export const ReadSingleTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await TourModel.findById(id);

    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- DELETE TOUR ---
export const DeleteTour = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTour = await TourModel.findByIdAndDelete(id);

    if (!deletedTour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Tour deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const UpdateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = req.file.filename;
    }
    if (updateData.startDay)
      updateData.startDay = new Date(updateData.startDay);
    if (updateData.endDay) updateData.endDay = new Date(updateData.endDay);

    const updatedTour = await TourModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedTour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    res.status(200).json({ success: true, data: updatedTour });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
