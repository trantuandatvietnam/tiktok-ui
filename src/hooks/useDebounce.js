import { useEffect, useState } from "react";

const useDebounced = (value, timeout) => {
    const [deboundedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout);
        return () => {
            clearTimeout(handler);
        };
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [value]);
    return deboundedValue;
};

export default useDebounced;
