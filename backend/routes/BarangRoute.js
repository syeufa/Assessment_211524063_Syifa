import express from "express";
import {getBarangs,
        getBarangById,
        createBarang
} from "../controllers/BarangController.js";

const router = express.Router();

router.get('/barangs', getBarangs);
router.get('/barangs/:KodeBarang', getBarangById);
router.post('/barangs', createBarang);


export default router;