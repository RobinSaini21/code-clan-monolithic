export const addTestCases = (testCases: any[], functionInvocation: string, functionDefination: string) => {
    const fun = `${functionDefination}\nreturn ${functionInvocation}(`;
    return testCases.map((args: any[]) => {
        let functionString = fun;
        for (let i = 0; i < args.length; i++) {
            const input = args[i];
            if (i === 0) {
                functionString = functionString + input;
            } else if (i === args.length - 1) {
                functionString = functionString + "," + input + ")";
            }
            else {
                functionString = functionString + "," + input;
            }

        };
        return functionString
    });
}           