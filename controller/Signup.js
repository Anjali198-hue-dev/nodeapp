import User from '../models/user.js';
import UtilJs from '../helpers/utils.js'

// export const loginByPhoneNumber = async (req, res) => {
//   console.log("req.body--->", req.body);
//   try {
//     const { mobile } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const user = new User({ email, password });
//     await user.save();

//     res.status(201).json({ message: 'User created successfully', userId: user._id });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

export const getByMobile = function (mobile_number) {
  return new Promise(function (resolve, reject) {
    User.findOne()
      .where({ mobile: mobile_number })
      .then(async function (data, err) {
        resolve(data);
        return;
      });
  });
};

// export const loginByPhoneNumber = async function (req, res, next) {
//   console.log("req.body--->", req.body);
//   const isExistsUser = await getByMobile(req.body.mobile);
//   if (!isExistsUser) {
//     var otp = 1234
//     console.log("otp-->",otp)
//     const mobile = (String(req.body.mobile))
//     const userObjData = await new User({
//       mobile: mobile,
//       otp: otp,
//       status: 1,
//       pin: 0,
//       is_mobile_verified: 0,
//       is_verified: 1,
//       total_balance: 0,
//       total_earning: 2,
//       wallet: 3,
//     });
//     userObjData.save(async function (error, respData) {
//       if (error) {
//         return next(UtilJs.returnJson({ status: ConstantJs.failStatus, message: trans.lang('message.something_went_wrong'), data: [] }))
//       } else {
//         return next(UtilJs.returnJson({ status: ConstantJs.successStatus, message: trans.lang('message.loaded_success'), data: { user_id: respData._id, mobile: respData.mobile, otp: respData.otp } }))
//       }
//     });
//   } else {
//     var otp = 1234
//     await User.updateOne({ _id: isExistsUser._id }, { $set: { otp: otp } });
//     return next(UtilJs.returnJson({ status: ConstantJs.successStatus, message: trans.lang('message.loaded_success'), data: { user_id: isExistsUser._id, mobile: isExistsUser.mobile, otp: otp } }));
//   }
// };

// export const loginByPhoneNumber = async function (req, res, next) {


export const loginByPhoneNumber = async function (req, res, next) {
  console.log("req.body--->", req.body);
  const isExistsUser = await getByMobile(req.body.mobile);
  const otp = 1234;
  const mobile = String(req.body.mobile);

  if (!isExistsUser) {
    const userObjData = new User({
      mobile,
      otp,
      status: 1,
      pin: 0,
      is_mobile_verified: 0,
      is_verified: 1,
      total_balance: 0,
      total_earning: 2,
      wallet: 3,
    });

    try {
      const respData = await userObjData.save();
      return res.json({
        status: 1,
        message: "Message Loaded Successfully",
        data: {
          user_id: respData._id,
          mobile: respData.mobile,
          otp: respData.otp
        }
      });
    } catch (error) {
      return res.json({
        status: 0,
        message: "Something went wrong",
        data: []
      });
    }
  } else {
    await User.updateOne({ _id: isExistsUser._id }, { $set: { otp } });
    return res.json({
      status: 1,
      message: "Message Loaded Successfully",
      data: {
        user_id: isExistsUser._id,
        mobile: isExistsUser.mobile,
        otp
      }
    });
  }
};

