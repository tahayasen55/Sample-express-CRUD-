import express from "express";

import {getUsers,createUser,getUsere,deleteUser,updateUser} from '../Controller/users.js';

const router = express.Router();


router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',getUsere);

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)


export default router; 