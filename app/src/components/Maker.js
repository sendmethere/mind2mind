import React, { useEffect, useState } from 'react';
import Choice from './Choice';
import Icon from './Icon';
import IconList from './IconList';


function Maker(props) {
    
    const colors = ["#BA3B46","#ED9B40","#61C9A8","#90D879"];
    const numberEmoji = ["1️⃣ ","2️⃣ ","3️⃣ ","4️⃣ "];
    const [suggestions, setSuggetions] = useState(["제안1", "제안2", "제안3", "제안4"]);

    const [icons, setIcons] = useState([]);
    const [modal, setModal] = useState({open: false, activeIcon: 0});
    const onOpenModal = (activeIcon) => {
        setModal({open: !modal.open, activeIcon:activeIcon });
    }

    const [currentIcon, setCurrentIcon] = useState(null);

    useEffect(()=>{
        var initialIcons = []
    
        for(var r=0;r<4;r++){
            var row = []
            for(var i=0;i<4;i++){
                row.push({
                    no: i,
                    icon: "",
                    desc: "",
                })
            }
            initialIcons.push(row);
        }
        setIcons(initialIcons);
    },[])

    const iconItems = icons.map((row, index) => {
        return (
                <div style={{background: colors[index]}} className="rounded p-2 grid grid-cols-5 gap-3">
                    <div className="flex items-center"><div className="text-center grow">힌트 {index+1}</div></div>

                    {row.map((icon, index_i) => {
                        return (
                            <Icon key={index*4+index_i} row={index} no={index_i} icon="😊" onOpenModal={onOpenModal}/>
                        )
                    })}
                    
                </div>
        )
    })


    return (
        <div className='md:flex justify-center' >
            <div className='grow'>
                <p className='text-center text-xl font-bold mt-2 mb-4'>문제 만들기</p>
                {suggestions.map((choice, index)=>{
                    return(
                        <Choice text={numberEmoji[index] + choice}></Choice>
                    )
                })}
                <Choice text="✏️ 직접 쓸게요"></Choice>
                <Choice text="🎲 다시 제안해주세요"></Choice>
            </div>
            <div style={{width: "480px"}} >
                <div className="grid grid-rows-4 gap-3">
                    {iconItems}
                </div>
                <div className='flex justify-end'>
                    <div className="rounded bg-sky-300 font-bold px-6 py-4 my-2 hover:cursor-pointer hover:brightness-105">완료</div>
                </div>
            </div>
            <>{modal.open && <IconList activeIcon={modal.activeIcon} onOpenModal={onOpenModal}/>}</>
        </div>
    );
}

export default Maker;