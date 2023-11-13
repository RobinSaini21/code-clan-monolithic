declare global {
    namespace Types__ {
        interface Name {
            firstName: string
        }
    }
}

interface ITestCaseProps {
    output?: any,
    result?: {
        testCase?: any,
        isEqual?: boolean
    }[],
    testCases: any[],
    error: boolean
};

interface IProblem {
    title: string,
    description: string,
    difficulty: string
    link: string,
    snippets: {
        [key: string]: string
    }
}
