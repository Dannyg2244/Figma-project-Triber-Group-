import express  from "express";
import logger from "morgan"
import mongoose from "mongoose"
import blogPostModel from "./model/blogPostModel.js";

const uri = 'mongodb://localhost:27017/TriberGroup';

const app = express();
const PORT = 3006

mongoose.connect(uri, {
    useNewUrlParser: true
  }).then(() => {
    console.log('Database Connection Successfull');
  }).catch((err) => {
    console.error('Error connecting to Database:', err);
  });

app.use(logger('dev'))

app.get('/', (req, res) => {
    try {
        res.status(200).json({msg: 'Project Triber Group'});
    } catch(error) {
         res.status(400).json({msg: 'Database not found'})
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})