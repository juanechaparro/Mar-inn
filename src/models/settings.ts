import mongoose from "mongoose";

const SettingsModel = new mongoose.Schema({
  available: { type: Number, required: false, default: 0 },
  adultPrice: {
    first: { type: Number },
    second: { type: Number },
    third: { type: Number },
    fourth: { type: Number },
  },
  childPrice: {
    first: { type: Number },
    second: { type: Number },
    third: { type: Number },
    fourth: { type: Number },
    minor: { type: Number },
  },
});

const Settings = mongoose.model("Settings", SettingsModel);

export default Settings;
