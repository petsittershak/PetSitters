
import React, { useState } from "react";



///функция которая грузит картинки умений ситтера к их профайлам

export default function CreateAbilityDiv({ options, iconsLinks, sitterObject, classN }) {
  //для проверки умений ситтера создан аррэй thisSitterCan, в него пушим все что ситтер умеет, и потом его перебираем
  //чтобы загрузить картинки обозначающие эти способности в профайл ситтера
  const thisSitterCan = [];
 
  options.forEach(opt => { if (sitterObject[opt] == true) { thisSitterCan.push(opt) } })

  return (
    <div className={classN} >
      {thisSitterCan.map((opt, i) => {
        return <img key={i} src={iconsLinks[opt]} />
      })}
    </div>
  );
}
