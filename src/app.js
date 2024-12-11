const express = require("express");
const sequelize = require("./utils/database");

const { Microcontroller, Status, Module, ModuleDetail, Sensor, SensorValue, setupAssociations } = require('./models');

const microcontrollerRoutes = require("./routes/microcontrollers.route");
const statusRoutes = require("./routes/statuses.route");
const moduleRoutes = require("./routes/modules.route");
const sensorRoutes = require("./routes/sensors.route");
const iotRoutes = require("./routes/iot.route");
const defaultRoutes = require("./routes/default.routes")
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

setupAssociations();

app.use(cors({
  origin: 'http://localhost:5173', // Replace 'yourFrontendPort' with your frontend port (e.g., 'http://localhost:3000')
  methods: 'GET, POST, PUT, DELETE, OPTIONS', // Adjust methods as per your API
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", "./src/views");

// Routes
app.use("/api/microcontrollers", microcontrollerRoutes);
app.use("/api/statuses", statusRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/sensors", sensorRoutes);
app.use("/api/iot", iotRoutes);

app.use(defaultRoutes)

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
