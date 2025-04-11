import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: { type: String, required: false, default: "" },
  age: { type: Number, required: false, default: "" },
  otp: { type: Number, required: false, default: "" },
  state: { type: String, required: false, trim: true, default: "" },
  gender: { type: String, required: false, default: "" },
  dob: { type: String, required: false, default: "" },
  yob: { type: Number, required: false, default: "" },
  mobile: { type: String, required: false, default: "" },
  aadhaar: { type: Number, required: false, default: "" },
  userName: { type: String, required: false, default: "" },
  email: { type: String, required: false, default: "" },
  avatar: { type: [String], required: false, default: "" },
  is_mobile_verified: { type: Number, required: false, default: "" },
  is_verified: { type: Number, required: false, default: "" },
  is_aadhar_verified: { type: Number, required: false, default: 0 },
  is_valid_state: { type: Number, required: false, default: 0 },
  is_pan_verified: { type: Number, required: false, default: 0 },
  is_account_verified: { type: Number, required: false, default: 0 },
  total_balance: { type: Number, required: false, default: 0 },
  total_earning: { type: Number, required: false, default: 0 },
  bonus_wallet: { type: Number, required: false, default: 0 },
  total_deposits: [
    {
      financialYear: { type: String, required: false },
      amount: { type: Number, required: false, default: 0 },
    },
  ],
  total_withdraw: [
    {
      financialYear: { type: String, required: false },
      amount: { type: Number, required: false, default: 0 },
    },
  ],
  opening_balance: [
    {
      financialYear: { type: String, required: false },
      amount: { type: Number, required: false, default: 0 },
      openingBalance: { type: Number, required: false, default: 0 },
    },
  ],
  tds_deducted: { type: Number, required: false, default: 0 },
  // razorpay_contact_data: {
  //   type: mongoose.Schema.Types.Mixed,
  //   required: false,
  // },
  // razorpay_contact_id: { type: String, required: false, default: "" },
  wallet: { type: Number, required: false, default: "" },
  bonus_wallet: { type: Number, required: false, default: 0 },
  address: { type: String, trim: true, required: false },
  device_id: { type: String, trim: true, required: false },
  pin: { type: Number, trim: true, required: false },
  password: { type: String, trim: true, required: false },
  salt: { type: String, trim: true, required: false },
  token: {
    type: String,
    required: false,
    default: null,
  },
  status: { type: Number, required: true, default: 0 },
  created_at: { type: Number, required: true, default: 0 },
  updated_at: { type: Number, required: false, default: 0 },
});

const User= mongoose.model("User", UserSchema);
export default User;
