import { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { PROBLEMS } from "../../services/problems";
import FallBackWapper from "../Common/FallBackWapper";
import { AxiosResponse, AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface ISProblems {
    title: string,
    description: string,
    difficulty: string,
    link: string
}

interface IProblems {
    problems: {
        problems: ISProblems[]
    }
}

const AllProblems = () => {
    const [problems, setProblems] = useState<Array<ISProblems> | Array<any>>([]);
    const navigate = useNavigate();
    const [state, setState] = useState({
        loading: false,
        error: false
    });

    useEffect(() => {
        setState({ error: false, loading: true });
        PROBLEMS.getAllProblems().then((res: AxiosResponse<IProblems>) => {
            setProblems(res.data.problems.problems);
        }).catch((err: AxiosError<any>) => {
            setState(prv => ({ ...prv, error: !!err }));
        }).finally(() => {
            setState(prv => ({ ...prv, loading: false }));
        });
    }, []);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text: string) => <a href="#!" style={{ fontWeight: 600 }}>{text}</a>  // Making title clickable
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Difficulty',
            dataIndex: 'difficulty',
            key: 'difficulty',
            render: (difficulty: string) => {
                let color = difficulty.toLowerCase() === 'hard' ? 'volcano' : difficulty.toLowerCase() === 'medium' ? 'orange' : 'green';
                return (
                    <Tag color={color} key={difficulty}>
                        {difficulty.toUpperCase()}
                    </Tag>
                );
            }
        }
    ];

    return (
        <FallBackWapper error={state.error} loading={state.loading}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 600 }}>Code Clan</h1>
                <Table
                    dataSource={problems}
                    columns={columns}
                    rowKey="title"
                    onRow={(record: ISProblems) => {
                        return {
                            onClick: () => {

                                navigate(`/problems/${record.link}`)


                            },
                            style: { cursor: 'pointer' }  // Change cursor on hover
                        }
                    }}
                />
            </Space>
        </FallBackWapper>
    );
}

export default AllProblems;
