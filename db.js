import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://raghuboominathan_99:raghu_2020@cluster0.oipzh.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
   
}
//
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables from .env file

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("DB Connected");
//   } catch (error) {
//     console.error("DB Connection Failed:", error);
//     process.exit(1); // Exit process with failure
//   }
// };

export default connectDB;
