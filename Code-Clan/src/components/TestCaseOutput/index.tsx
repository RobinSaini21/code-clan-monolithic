import React from "react";
import { List, Badge, Card } from "antd";

// interface ITestCaseProps {
//     result?: { isEqual: boolean }[];
//     testCases?: any[];
// }

const TestCaseOutput: React.FC<ITestCaseProps> = ({ result, testCases , error }) => {
if(error){
    return <strong>Ops Something Went Wrong</strong>
}
    return (
        <Card title="Test Cases Output" bordered={false} style={{ width: '100%', marginTop: 16 }}>
            <List
                itemLayout="horizontal"
                dataSource={result}
                renderItem={(res, i) => {
                    const test: any[] = testCases?.[i] || [];
                    const { isEqual } = res;

                    return (
                        <List.Item>
                            <List.Item.Meta
                                title={`Test Case ${i + 1}`}
                                description={
                                    <>
                                        <strong>Input:</strong> {JSON.stringify(test)}
                                        <Badge 
                                            status={isEqual ? "success" : "error"} 
                                            text={isEqual ? "Passed" : "Failed"} 
                                            style={{ marginLeft: 16 }} 
                                        />
                                    </>
                                }
                            />
                        </List.Item>
                    );
                }}
            />
        </Card>
    );
}

export default TestCaseOutput;
