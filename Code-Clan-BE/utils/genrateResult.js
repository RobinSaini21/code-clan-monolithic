import isEqual from "lodash.isequal"

export const genrateResult = (outputs = [], outputType, expectedOutput = [], lang) => {
    outputs = removeBlankSpace(outputs)
    let parsedOutput = [];
    if (outputType === "number") {
        for (let i = 0; i < outputs.length; i++) {
            let output = outputs[i]
            if (output === "") {
                continue;
            }
            parsedOutput.push(parseInt(output, 10));

        }
    } else if (outputType === "arrayOfNumbers") {

        if (lang === "php") {

            outputs.forEach((output = "") => {
                const parsed = output.split(",").map((n) => n.split("\n").map(v => parseInt(v ? v : "0")));
                parsedOutput.push(parsed.flat());
            })
        } else {
            outputs.forEach((output) => {
                parsedOutput.push(JSON.parse(output))
            })
        };
    } else if (outputType === "boolean") {
        outputs.forEach((output) => {
            output.trim() === "true" ? parsedOutput.push(true) : parsedOutput.push(false)

        });
    };

    return checkOutputEqual(parsedOutput, expectedOutput);
}

const checkOutputEqual = (parsedOutput = [], expectedOutput = []) => {
    const n = parsedOutput.length;
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push({
            testCase: expectedOutput[i],
            isEqual: isEqual(expectedOutput[i], parsedOutput[i])
        })
    };

    return { result, output: parsedOutput };
};


const removeBlankSpace = (outputs = []) => {
    let withOutSpace = [];
    for (const output of outputs) {
        if (output === "" || output === " ") continue;
        withOutSpace.push(output)
    }

    return withOutSpace;
};
