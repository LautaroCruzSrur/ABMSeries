import express from 'express';
import router from './routes/series.routes.js';
import dbconect from './db/db.js';


const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Rutas
app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  dbconect();
});
;