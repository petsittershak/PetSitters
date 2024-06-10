import React, { useState } from "react";

function CreateOurSittersOptions({ options, picOptions, classN, classNComp}) {
  return (
    <div className={classN}>
      {options.map((opt, i) => {
        return (
          <div key={i} className="oneActionblock">
            <img src={picOptions[i]} />
            <div className={classNComp}>{opt}</div>
        </div>
      )})
      
      }
    </div>
  )
}



export default function CreateOurSitters() {


  const dogsArr = [
    "./app/pictures/dogs/01_dog_piece.png",
    "./app/pictures/dogs/02_dog_angry.png",
    "./app/pictures/dogs/03_dog_fight.png",
    "./app/pictures/dogs/04_dog_happy.png",
   "./app/pictures/dogs/05_dog_sick.png"
  ];
  
  const dogsitterDescrArr = [
    "Умеют вытаскивать подобранный кусок из пасти собаки",
    "Поладят с собакой даже если у нее сложный характер",
    "Знают, как не допустить драку с другой собакой",
    "Знают язык тела собакена",
    "Знают, что делать, если собаке плохо"
  ];

  const catsArr = [
    "./app/pictures/cats/01_cat_play.png",
    "./app/pictures/cats/02_cat_happy.png",
    "./app/pictures/cats/03_cat_shhh.png",
    "./app/pictures/cats/04_cat_sick.png"
  ];

  const catsitterDescrArr = [
    "Знают, как развлечь шерстяного",
    "Умеют ладить с любым котэ",
    "Знают язык тела кошки",
    "Знают, что делать, если кошке нездоровится",
  ];


  return (
    <div className="div4_content">
      <div className="div4_content_div">
        <h1>Наши dogsitters</h1>
        <CreateOurSittersOptions options={dogsitterDescrArr} picOptions={dogsArr} classN="dogCatSittersBlockPict" classNComp="dogsittersCatsittersCan dogsittersCan" />
      </div>
      <div className="div4_content_div">
        <h1>Наши catsitters</h1>
        <CreateOurSittersOptions options={catsitterDescrArr} picOptions={catsArr} classN="dogCatSittersBlockPict catSittersBlockPict" classNComp="dogsittersCatsittersCan catsittersCan"/>
      </div>
    </div>
  )
}