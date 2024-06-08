import React, {useState} from "react";

//код в этом файле создает кнопку используя пропсы

export default function CreateButton({btnType, classN, onClickFunct, btnText}) {
  if (onClickFunct) {
    return (
    <button className={classN} type={btnType} onClick={(e)=>onClickFunct(e)}>{btnText}</button>
)
  }
  return (
    <button className={classN} type={btnType}>{btnText}</button>
)
  
}

