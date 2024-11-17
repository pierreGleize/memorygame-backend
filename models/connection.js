const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:8KrtAsEVmjtKbmaW@admin.3ss6o.mongodb.net/memorygame";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
