const { useRef } = require("react");

const useDebounce = (timeout, callback) => {
    const timeoutRef = useRef(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(callback, timeout);
};

export default useDebounce;
