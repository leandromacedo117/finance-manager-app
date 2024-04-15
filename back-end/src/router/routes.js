import { Router } from "express";
import { authentication } from "../controllers/authentication";

const router = Router()

router.post('/json', authentication);

router.get('/test', (req, res) => {
    res.send('funcionatest');
});

export default router;