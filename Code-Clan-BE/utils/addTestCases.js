import { javaTemplate } from "./javaTemplate";
import { PROBLEMS } from "../MOCK/PROBLEMS";


export const addTestCases = (codeStr, problem, lang, id) => {
    const creds = PROBLEMS[problem];

    if (lang === "java") {
        return `${javaTemplate(id, creds.testCases[lang])} \n ${codeStr} \n}`
    } else if (lang === "php") {
        codeStr = phpParese(codeStr)
    } else if (lang === "php") {
        creds.testCases[lang].forEach(testCase => {
            codeStr = codeStr + testCase
        });
        return `${codeStr}
        
        ?>`
    }

    creds.testCases[lang].forEach(testCase => {
        codeStr = codeStr + testCase
    });

    return codeStr
}

const phpParese = (code = "") => {
    let parsed = "";

    for (let i = 0; i < code.length - 1; i++) {
        const currToken = code[i];
        const nextToken = code[i + 1]
        if (currToken === "?" && nextToken === ">") return parsed

        parsed = parsed + currToken
    }
}