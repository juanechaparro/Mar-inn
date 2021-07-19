import mongoose from "mongoose";

const RegisterModel = new mongoose.Schema({
  customerName: { type: String },
  customerLastName: { type: String },
  mobile: { type: String, required: true },
  identificationNumber: { type: String },
  nightSetting: {
    adults: { type: Number },
    kids: { type: Number },
    price: { type: Number },
  },
  payments: [
    {
      payed: { type: Number },
      paymentMethod: { type: String },
      paymentProof: { type: String },
      pendingPayment: { type: Number },
      createdAt: { type: Date },
    },
  ],
  nightDays: [
    {
      room: [{ type: String, required: false }],
      day: { type: Date },
    },
  ],
  services: [
    {
      payed: { type: Number },
      paymentMethod: { type: String },
      paymentProof: { type: String },
      pendingPayment: { type: Number },
      price: { type: Number },
    },
  ],
  createdAt: { type: Date, default: new Date().valueOf() },
});

const Register = mongoose.model("Register", RegisterModel);

export default Register;
