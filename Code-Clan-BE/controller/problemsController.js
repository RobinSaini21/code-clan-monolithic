import { PROBLEMS_DESCRIPTION_TITLE as problems } from "../MOCK/PROBLEMS";


export const getAllProblems = (req, res) => {
    return res.status(200).json({ problems });
}

export const getProblem = (req, res) => {

    try {
        const id = req.params.id;
        return res.status(200).json({ problem: problems.problems.find((problem) => problem.link === id) });
    } catch (e) {
        return res.status(400).json({ error: error });
    }

}