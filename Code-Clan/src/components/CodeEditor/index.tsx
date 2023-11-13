import { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import { useInterval } from '../../hooks/useInterval';
import { Button, Card, Tabs, Select } from 'antd';
import { CodeExecution, PROBLEMS } from '../../services';
import { AxiosResponse, AxiosError } from "axios";
import { LANGUAGE_MAP } from '../../const/languageMap';
import { useParams } from 'react-router-dom';
import TestCaseOutput from "../TestCaseOutput";
import LoadingTerminal from '../Common/LoadingTerminal';
import FallBackWapper from '../Common/FallBackWapper';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const { TabPane } = Tabs;
const { Option } = Select;

const CodeEditor = () => {
    const params = useParams();
    const [code, setCode] = useState(`function sum(a,b){
        return a + b;
      }`);
    const [timer, setTimer] = useState<number>(60);
    const [output, setOutput] = useState<ITestCaseProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [interval, setInterval] = useState<null | number>(1000);
    const [language, setLanguage] = useState<string>('javascript');
    const [error, setError] = useState<boolean>(false);
    const [problem, setProblem] = useState<IProblem | null>();
    const [loadingEditor, setLoadingEditor] = useState<boolean>(false);
    const [editorError, setEditorError] = useState<boolean>(false);
    useEffect(() => {
        if (params.problemName) {
            setLoadingEditor(true);
            PROBLEMS.getProblem(params.problemName).then((res: AxiosResponse<{ problem: IProblem }>) => {
                setProblem(res.data.problem)
            }).catch((err: AxiosError) => {
                setEditorError(!!err)
            }).finally(() => {
                setLoadingEditor(false);
            });
        };

    }, []);


    useInterval(() => {
        if (timer === 0) {
            setInterval(null)
            return
        }
        setTimer(time => time - 1)
    }, interval);

    const onChange = (codeChanges: string) => {
        setCode(codeChanges);
    };

    const handleRunCode = () => {

        const file = {
            code: code,
            lang: LANGUAGE_MAP[language as keyof typeof LANGUAGE_MAP],
            id: params.problemName
        }
        setLoading(true);
        setError(false);
        CodeExecution.writeFile(file).then((res: AxiosResponse) => {
            const fileBody = {
                id: res.data.id,
                lang: LANGUAGE_MAP[language as keyof typeof LANGUAGE_MAP],
                problemId: params.problemName
            };

            CodeExecution.runFile(fileBody).then((res: AxiosResponse) => {
                setOutput(res.data)
            }).catch((err: AxiosError) => setError(!!err));

        }).catch((err: AxiosError) => {
            setError(!!err);
        }).finally(() => {
            setLoading(false);
        })
    };

    const handleLanguageChange = (value: string) => {
        if (value) {
            setCode(problem?.snippets[value] ? problem?.snippets[value] : "")
            setLanguage(value);
        };

    };
    return (
        <FallBackWapper loading={loadingEditor} error={editorError}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '20px', gap: '10px', backgroundColor: '#f0f2f5', height: '100vh' }}>
                <Card title={problem?.title} style={{ flex: '1', marginRight: '10px', backgroundColor: '#fff', color: '#001529' }}>
                    <p>{problem?.description}</p>
                </Card>
                <div style={{ flex: '2' }}>
                    <Card title={timer} style={{ backgroundColor: '#fff', color: '#001529' }}>
                        <Button type="primary" onClick={handleRunCode} style={{ marginBottom: '20px', backgroundColor: '#1890ff', borderColor: '#1890ff', color: '#fff' }}>Run</Button>
                        <Select defaultValue={language} style={{ marginLeft: "10px", width: 120 }} onChange={handleLanguageChange}>
                            <Option value="javascript">JavaScript</Option>
                            <Option value="typescript">TypeScript</Option>
                            <Option value="java">Java</Option>
                            <Option value="php">PHP</Option>
                        </Select>
                        <AceEditor
                            mode={language}
                            theme="monokai"
                            onChange={onChange}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                            height="500px"
                            width="100%"
                        />
                    </Card>
                    <Tabs defaultActiveKey="1" style={{ marginTop: '20px', backgroundColor: '#fff', color: '#001529' }}>
                        <TabPane tab={<span style={{ marginLeft: "10px", fontSize: '18px', color: '#001529' }}>Output</span>} key="1" style={{ backgroundColor: '#f0f2f5', borderRadius: '5px', color: '#001529', height: '30vh', overflow: 'auto' }}>
                            {loading ? <LoadingTerminal /> : output && <TestCaseOutput {...output} error={error} />}
                        </TabPane>
                        {/* <TabPane tab={<span style={{ fontSize: '18px', color: '#001529' }}>Console</span>} key="2" style={{ backgroundColor: '#f0f2f5', borderRadius: '5px', color: '#001529', height: '30vh', overflow: 'auto' }}>
                        {[...new Set([...consoleOutput.map(logs => {
                            if (typeof logs === "string") return logs;

                            if (typeof logs === "object") return JSON.stringify(logs);
                            return JSON.stringify(logs)
                        })])].map(logs => (
                            <pre>{JSON.stringify(logs)}</pre>
                        ))}
                    </TabPane> */}
                    </Tabs>
                </div>
            </div>
        </FallBackWapper>
    );
}

export default CodeEditor;


// <?php 
// function twoSum($nums, $target) {
//     $map = [];
//     for ($i = 0; $i < count($nums); $i++) {
//         $complement = $target - $nums[$i];
//         if (isset($map[$complement])) {
//             return [$map[$complement], $i];
//         }
//         $map[$nums[$i]] = $i;
//     }
//     return null;
// }
// ?>
