import React from 'react';

function Icon(props) {
    return (
        <div row={props.row} no={props.no} onClick={() => {props.onOpenModal(4*props.row+props.no);}}
             className='rounded w-10 h-10 md:w-15 md:h-15 sm:w-20 sm:h-20
                      bg-white hover:cursor-pointer hover:bg-slate-100
                      flex justify-center items-center'>
            <div className='text-3xl'>{props.icon}</div>
        </div>
    );
}

export default Icon;