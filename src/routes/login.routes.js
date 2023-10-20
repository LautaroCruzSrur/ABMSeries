import { Router } from "express";

const router = Router();

router.post("/login" , (res,req) => {
    const user = req.body.user;
    const password = req.body.password;
    const database= req.body.database;
    const host = req.body.host;
    const port = req.body.port;
});

const dbconection = { user , password ,database ,host ,port};