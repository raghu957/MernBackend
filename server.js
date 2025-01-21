import express  from "express"
import cors from 'cors'
import  connectDB  from "./db.js"
import userRouter from "./userRoute.js"
import foodRouter from "./foodRoute.js"
import 'dotenv/config'
import cartRouter from "./cartRoute.js"
import orderRouter from "./orderRoute.js"
import sideRoutes from "./sidebarRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)
app.use('/api/sidebar', sideRoutes);

app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
