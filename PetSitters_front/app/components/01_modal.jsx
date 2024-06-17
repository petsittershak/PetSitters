import React, { Children, useState } from "react";



///функция создающая модпльное окно, ее пожно переиспользовать вставляя в нее children

export default function Modal({active, setActive, children, childrenClass}) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? `${childrenClass} active` : `${childrenClass}`} onClick={(e)=> e.stopPropagation()}>
      {children}
      </div>
    </div>
  )
}