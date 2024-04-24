import { Router } from "express";
import { authentication } from "../controllers/authentication";
import { loginValidation } from "../controllers/loginAuthentication";

const router = Router()

router.post('/json', authentication);
router.post('/login', loginValidation)

router.get('/test', (req, res) => {
    res.send('funcionatest');
});

export default router;