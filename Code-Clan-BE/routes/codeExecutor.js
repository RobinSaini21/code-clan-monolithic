import express from 'express'
import { codeCompile , writeFile } from '../controller/codeCompiler';
import { getAllProblems , getProblem } from '../controller/problemsController';
const router = express.Router();

router.post("/execute-code" ,codeCompile);
router.post("/write-file",writeFile);
router.get("/get-all-problems",getAllProblems);
router.get("/get-problem/:id" , getProblem)

export default router;