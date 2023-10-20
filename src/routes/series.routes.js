import  {getSeries , createSeries , deleteSeries ,updateSeries, getSerie} from "../controllers/controller.js";
import { Router } from "express";

const router = Router();

router.get('/series', getSeries);
router.get('/series/:id', getSerie);
router.post('/series', createSeries);
router.delete('/series/:id', deleteSeries);
router.put('/series/:id', updateSeries);

export default router;
