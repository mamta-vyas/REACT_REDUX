import React from 'react';
import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state)
    return (
        <div>
        <h3>{count}</h3>
        </div>
    )
}
export default Counter;