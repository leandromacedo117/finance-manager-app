import { Router } from "express";
import { authentication } from "../controllers/authentication";

const router = Router()

router.get('/json', authentication);

router.get('/test', (req, res) => {
    res.send('funcionatest');
});

export default router;