import { FC } from "react";
import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const { Title } = Typography;

const LoadingTerminal: FC = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

    return (
      <div className="loading-container">
        <Spin indicator={antIcon} size="large" />
        <Title level={2}>Loading...</Title>
      </div>
    );
};

export default LoadingTerminal;