import { useRef, useEffect } from "react";
import { useIsomorphicLayoutEffect } from 'usehooks-ts'


export const useInterval = (callback: () => void, interval: number | null) => {
    const savedCallBack = useRef(callback);

    useIsomorphicLayoutEffect(() => {
        savedCallBack.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!interval) return;

        const id = setInterval(() => {
            savedCallBack.current()
        }, interval);

        return () => clearInterval(id)
    },[callback])

}