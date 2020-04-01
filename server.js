const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// CONNECT DATABASE
connectDB();

//INIT MIDDLEWARE
app.use(express.json({ extended: false }));

// DEFINE OUR ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/workouts', require('./routes/workouts'));

app.use(express.static(path.join(__dirname, './client-workout', "build")));

// Serve stat assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client-workout/build'));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'client-workout', 'build', 'index.html')
    )
  );
}

const PORT = process.env.PORT || 443;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
