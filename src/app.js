const express = require("express");
const sequelize = require("./utils/database");
const microcontrollerRoutes = require("./routes/microcontrollers.route");
const statusRoutes = require("./routes/statuses.route");
const moduleRoutes = require("./routes/modules.route");
const sensorRoutes = require("./routes/sensors.route");
const iotRoutes = require("./routes/iot.route");
const defaultRoutes = require("./routes/default.route");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Routes
app.use("/api/microcontrollers", microcontrollerRoutes);
app.use("/api/statuses", statusRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/sensors", sensorRoutes);
app.use("/api/iot", iotRoutes);

// Default route
app.use("/", defaultRoutes);

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
