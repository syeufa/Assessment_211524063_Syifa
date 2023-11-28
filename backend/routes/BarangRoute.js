import express from "express";
import {getBarangs,
        getBarangById,
        createBarang,
        updateBarang,
        deleteBarang
} from "../controllers/BarangController.js";

const router = express.Router();

router.get('/barangs', getBarangs);
router.get('/barangs/:KodeBarang', getBarangById);
router.post('/barangs', createBarang);
router.patch('/barangs/:KodeBarang', updateBarang);
router.post('/barangs/:KodeBarang', deleteBarang);


export default router;