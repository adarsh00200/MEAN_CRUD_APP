const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://adarsh:Adarsh222@cluster0.vzjtvgr.mongodb.net/DB_Name?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
} 