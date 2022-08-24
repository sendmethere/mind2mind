import React from 'react';

function Choice(props) {
    return (
        <div onClick={()=>{props.clickEvent(props.no, props.answer);}} className={`rounded border border-gray-300 px-2 py-4 m-2 mr-5 hover:cursor-pointer hover:bg-slate-100 ${ props.isChosen ? "bg-yellow-300" : ""}`}>
            {props.text}
        </div>
    );
}

export default Choice;