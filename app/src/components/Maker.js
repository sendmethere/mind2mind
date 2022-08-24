import React, { useEffect, useState } from 'react';

import Footer from './Footer';
import Navbar from './Header';

import Choice from './Choice';
import Icon from './Icon';
import IconList from './IconList';
import logo from '../logo.svg';


function Maker(props) {

    /** 기본 레이아웃 관련 **/
    
    const colors = ["#BA3B46","#ED9B40","#61C9A8","#90D879"];
    const numberEmoji = ["1️⃣ ","2️⃣ ","3️⃣ ","4️⃣ "];

    /** 게임 진행 관련 **/
    const [game, setGame] = useState({
        started: false,
        solved: false,
        status: "NULL",
    })
    const startGame = () => {
        if(answer.no === ""){
            alert("답을 선택해주세요")
        } else {
        setGame({
            started: true,
            solved: false,
            status: "NULL",
        });
        console.log(game);
        }
    }
    const [answerToSubmit, setAnswerToSubmit] = useState("");
    const intialize = () => {
        setGame({
            started: false,
            solved: false,
            status: "NULL",
        });

    }

    /** 정답 관련 **/
    const checkAnswer = () => {
        if( answerToSubmit != answer.content) {
            setGame({
                started: true,
                solved: false,
                status: "WRONG",
            });

        } else { 
            setGame({
                started: true,
                solved: true,
                status: "CORRECT",
            });
        }
    }

    const handleChange = ({ target: { value } }) => setAnswerToSubmit(value);

    /** 선택지 관련 **/

    const words = require('../words.json');
    const randomPick = () => {
        return [ words[Math.floor(Math.random() * words.length)]["content"],
            words[Math.floor(Math.random() * words.length)]["content"],
            words[Math.floor(Math.random() * words.length)]["content"],
            words[Math.floor(Math.random() * words.length)]["content"]
            ];
          }
    const [suggestions, setSuggetions] = useState(randomPick());
    const [answer, setAnswer] = useState({
        no: "",
        content: ""
    });
    const pickAnswer = (no, answer) => {
        setAnswer({no : no, content: answer});
    }

    const shuffle = () => {
        setSuggetions(randomPick());
        pickAnswer({no:"", content:""})
    }

    /** 힌트 관련 **/

    const [icons, setIcons] = useState([]);
    const [modal, setModal] = useState({open: false, activeIcon: 0, row:0, no:0});
    const onOpenModal = (activeIcon) => {
        setModal({open: !modal.open, activeIcon:activeIcon, row:parseInt(activeIcon/4), no:activeIcon%4 });
    }

    const selectIcon = (row, no, iconData) => {
        let item_current = [...icons];
        let item = icons[row][no];

        item.icon = iconData.icon;
        item.desc = iconData.desc;
        item_current[row][no] = item;

        setIcons(item_current);
        onOpenModal();
    }

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

    const intializeIcons = () => {
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

    }


    return (

        <div className="md:w-screen md:h-screen"
        style={{"background": "#f4f5f6"}} >
            <Navbar/>
            <div className='flex justify-center py-8'>
                <div className='rounded bg-white px-4 py-4'
                     style={{width:"840px"}}>

                    <div className='md:flex justify-center' >
                                <div className="grow">
                                    <div className="flex justify-center text-center">
                                        <img className="w-44 m-auto" src={logo}></img>
                                    </div>
                                    
                                    <div className={`grow ${game.started ? "hidden" : ""}`}>
                                        {suggestions.map((choice, index)=>{
                                            return(
                                                <Choice clickEvent={pickAnswer} key={index} no={index+1} answer={choice} text={numberEmoji[index] + choice} isChosen={ (index+1 == answer.no) }></Choice>
                                            )
                                        })}
                                        <Choice clickEvent={shuffle} text="🎲 다른 문제 보기" ></Choice>
                                    </div>

                                    
                                    <div className={`${game.started ? "" : "hidden"}`}>
                                        <div className='p-6 flex justify-center'>
                                            <input className="rounded border p-5 text-xl" type="text" onChange={handleChange} />
                                        </div>
                                        <div className={`${(game.status === "WRONG") ? "" : "hidden"} m-auto rounded p-2 m-2 bg-red-100 text-red-400 w-5/6`}>오답입니다!</div>
                                        <div className={`${(game.status === "CORRECT") ? "" : "hidden"} m-auto rounded p-2 m-2 bg-green-100 text-green-600 w-5/6`}>정답입니다!</div>
                                        <div className='flex justify-center'>
                                            <div className={`rounded border border-gray-300 font-bold px-6 py-4 m-2 hover:cursor-pointer hover:brightness-105`} onClick={intialize}>돌아가기</div>
                                            <div className={`rounded bg-sky-300 font-bold px-6 py-4 m-2 hover:cursor-pointer hover:brightness-105`} onClick={checkAnswer}>확인</div>
                                        </div>
                                    </div>



                                </div>
                                <div style={{width: "480px"}} >
                                    <div className="grid grid-rows-4 gap-3">
                                        {icons.map((row, index) => {
                                            return (
                                                    <div key={index} style={{background: colors[index]}} className="rounded p-2 grid grid-cols-5 gap-3">
                                                        <div className="flex items-center"><div className="text-center grow text-2xl text-bold text-white">{index+1}</div></div>

                                                        {row.map((icon, index_i) => {
                                                            return (
                                                                <Icon key={index*4+index_i} row={index} no={index_i} icon={icons[index][index_i]["icon"]} desc={icons[index][index_i]["desc"]} onOpenModal={onOpenModal}/>
                                                            )
                                                        })}
                                                        
                                                    </div>
                                            )
                                        })
                                        }
                                    </div>
                                    <div className='flex justify-end'>
                                        <div className={`font-bold px-6 py-4 mx-2 my-2 border bg-white hover:cursor-pointer hover:brightness-95 ${ game.started ? "hidden" : ""}`} onClick={intializeIcons}>초기화</div>
                                        <div className={`rounded ${ answer.no === "" ? "bg-gray-300" : "bg-sky-300"} font-bold px-6 py-4 my-2 hover:cursor-pointer hover:brightness-105 ${ game.started ? "hidden" : ""}`} onClick={startGame}>완료</div>
                                    </div>
                                </div>
                                <>{modal.open && <IconList activeIcon={modal.activeIcon} row={modal.row} no={modal.no} selectIcon={selectIcon} onOpenModal={onOpenModal}/>}</>
                            </div>

                </div>
            </div>
            <Footer/>
        </div>


        
    );
}

export default Maker;