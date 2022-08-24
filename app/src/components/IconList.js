import React from 'react';
let emojis = require('../emojis.json');

function IconList(props) {

    
    return (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        아이콘 선택
                      </h3>
                      <button
                        className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
                        onClick={props.onOpenModal}
                      >
                        <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block">
                          x
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto overflow-y-scroll" style={{maxHeight:"480px"}}>
                      <div className='grid grid-cols-6 gap-3'>
                      {emojis.map((emoji, index)=>{
                        return (
                          <div key={index} className="w-25 h-25 p-2 text-3xl rounded border border-slate-200 hover:cursor-pointer 
                          hover:bg-slate-200 flex flex-col justify-center items-center"
                          onClick={()=>{props.selectIcon(props.row, props.no, {icon:emoji.emoji, desc:emoji.desc})}}>
                            {emoji.emoji}
                            <span className='text-xs m-2'>{emoji.desc}</span>
                            </div>
                        )
                      })}
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={props.onOpenModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
    );
}

export default IconList;