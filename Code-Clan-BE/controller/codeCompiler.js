import fs from "node:fs";
import { exec } from "node:child_process";
import { v4 as uuidv4 } from 'uuid';
import { addTestCases } from "../utils/addTestCases";
import { RUNTIME_MAP } from "../constants/RUNTIME_MAP";
import { PROBLEMS } from "../MOCK/PROBLEMS";
import { genrateResult } from "../utils/genrateResult";

export const codeCompile = async (req, res, next) => {

    try {
        const id = req?.body?.id;
        const lang = req?.body?.lang;
        const problemId = req?.body?.problemId;
        exec(`${RUNTIME_MAP[lang]} ./code-files/${id}.${lang}`, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).send(`exec error: ${error}`);
            };
            let output = [];
            if (lang === "php") {
                output = stdout.split("<br>");
            } else {
                output = stdout.split("\n");
            };
            const result = genrateResult(output, PROBLEMS[problemId].outputType, PROBLEMS[problemId].ouput, lang);
            
            return res.status(200).json({ id: id, ...result, testCases: PROBLEMS[problemId].testCasesForAll });
        });
    } catch (error) {
        return res.status(400).json({ error: error });
    }

}

export const writeFile = async (req, res, next) => {
    try {
        const lang = req.body.lang
        const idProblem = req.body.id;
        const id = lang + uuidv4();
        const codeWithTestCases = addTestCases(req.body.code, idProblem , lang, id)
        fs.writeFile(`./code-files/${id}.${lang}`, codeWithTestCases, (err) => {
            if (err) {
                return res.status(500).send(`Error writing file: ${err}`);
            } else {

                return res.status(200).json({ id: id });

            }
        })
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};


