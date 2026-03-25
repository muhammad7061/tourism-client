import mongoose from "mongoose";

const TourSchema = mongoose.Schema({
  title: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  desc: { type: String, required: true },
  days: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  startDay: { type: Date, required: true },
  endDay: { type: Date, required: true },
  category: { type: String, required: true },
});

const TourModel = mongoose.model("Tour", TourSchema);
export default TourModel;
