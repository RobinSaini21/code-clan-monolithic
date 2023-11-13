import { ReactNode } from "react";
import LoadingTerminal from "../LoadingTerminal";

interface IFallBack {
    loading: boolean,
    error: boolean,
    children: ReactNode
}

const FallBackWapper = (props: IFallBack) => {
    const { loading, error, children } = props;

    if (loading) {
        return <LoadingTerminal />
    } else if (error) {
        return <h1>OPS SOMETHING WENT WRONG</h1>
    }
    return (
        <>
            {children}
        </>
    )
}

export default FallBackWapper;