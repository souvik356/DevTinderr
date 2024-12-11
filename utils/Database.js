// const userName = "roysantanu729"
// const dataBasePassword = "eEOmGAUT1WGrtBv8"

const mongoose = require('mongoose')

const connectDb = async ()=>{
    await mongoose.connect(
        "mongodb+srv://roysantanu729:eEOmGAUT1WGrtBv8@devtinder.hh3lq.mongodb.net/DevTinder"
    )
}

module.exports = { connectDb }
