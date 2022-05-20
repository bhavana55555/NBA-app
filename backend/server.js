const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exercise_controllers = require('./controllers/exercise.controllers');

const uri = process.env.ATLAS_URI;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect(uri, options).catch((error) => console.log(error));

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});
mongoose.connection.on('error', (err) => {
	console.error('mongoose connection error', err);
});

const exercisesRouter = require('./routes/exercises');


app.get('/', exercise_controllers.list_exercises);
app.use('/exercises', exercisesRouter);


app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
