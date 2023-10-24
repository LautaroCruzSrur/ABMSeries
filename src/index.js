import express from 'express';
import series from './routes/series.routes.js';
import login from './routes/login.routes.js'
import dbconect from './db/db.js';
import cors from 'cors'


const app = express();
app.set("port" , 3000);

const initApp = async () => {
  try {
    await dbconect();
    app
      .listen(app.get("port"), () => {
        console.log(`Backend conectado al puerto: ${app.get("port")}`);
      })
      .on("error", (error) => {
        console.log("ERROR:", error);
        process.exit(1);
      });
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};

initApp();


// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));



// Rutas
app.use('/api', series);
app.use('/api', login);
