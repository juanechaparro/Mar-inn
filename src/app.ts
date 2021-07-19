/* eslint-disable no-console */
import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import { json } from 'body-parser'
dotenv.config({ path: 'dev.env' })

const app = express()
app.use(json())
const mongoUri = process.env.MONGO_URI || ''

app.use("*", (req,res)=>{
    res.json({message:"Hello Carlos"})
})
app.listen(process.env.PORT, () => {
  mongoose.connect(
    mongoUri,
    {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    },
    () => {
      console.log('connected to database')
    }
  )
  console.log(`server is running on ${process.env.PORT}`)
})
