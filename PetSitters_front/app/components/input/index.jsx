
import React, {useState} from "react";

// эта функция создает список из предоставленного массива опций, и меняет состояние выбора, внося его в форму
// функция необходима для иммитации работы инпута
// в функции определяется стиль списка, название нужного класса так же передается в пропсах
function CreateServiceList({ options, click, changeState, classN, liClass}) {
  return (
    <div className={`${classN}  ${click ? " form_select_active" : " "}`}>
      {options.map((opt, i) => { return <li key={i} className={`client_form_li li_${liClass}`} onClick={()=>changeState(opt)}>{opt}</li> })}
    </div>
  )
}

// функция меняет состояние клика

function handleClick(opt, clicked, setClicked) {
    if (clicked == false) {
      setClicked(true)
    } else {
      setClicked(false)
    };
  
  
};


//функция принимает ряд пропсов, и возвращает поле имитирующее функционал инпута
//создает див с нужными стилями, благодаря передачи в него класса посредством пропса, и при нажании вызывает функцию передаваемую в пропсах
//вызывает CreateServiceList которая возвращает список для вставки 
export default function Input({formName, classes, opt, clickState, setClick, changeStateOpt, choiceMade, placeholder}) {
return (
  <div name={formName} placeholder={placeholder} className={`_select_${classes} ${formName}`} onClick={() => handleClick(formName, clickState, setClick)}>
{choiceMade}
    <CreateServiceList options={opt} click={clickState} changeState={changeStateOpt} classN={classes} liClass={formName} />
</div>
  )
}
