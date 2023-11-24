import React, {useContext} from 'react';
import {CarContext} from "../Store/CarContext";

const Counter = ({
    data
}) => {
    const { addItem, removeItem} = useContext(CarContext);
    return (<div className="flex">
        {(data.amount !== 0 && data.amount)?
            <>
                <svg className="w-6 h-6 mt-0.5" onClick={() => (removeItem(data))}
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-lg font-semibold">{data.amount}</span>
            </>:""}
        <svg className="w-6 h-6 mt-0.5 text-orange-400" onClick={() => (addItem(data))}
             xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    </div>);
};

export default Counter;