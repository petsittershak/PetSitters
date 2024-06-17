import React, { useState } from "react";


// еще один блок с гифками при наведении мыши.
//
function CreateOurSittersOptions({ options, picOptions, picSize, gifOpt, classN, classNComp}) {
  return (
    <div className={classN}>
      {options.map((opt, i) => {
        return (
          <div key={i} className="oneActionblock">
  <a className="div4_gif" href=""
              style={{
                background: `url(${picOptions[i]}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover", width: picSize[i][0] + "px", height: picSize[i][1] + "px"
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'none';
                e.target.firstChild.style.visibility = "visible";
              }}
            
              onMouseLeave={(e) => {
                e.target.firstChild.style.visibility = "hidden";
                e.target.style.background = `url(${picOptions[i]}) no-repeat`;
                e.target.style.backgroundPosition = "center";
                e.target.style.backgroundSize = "cover";
                e.target.style.width =  picSize[i][0] + "px";
                e.target.style.height = picSize[i][1] + "px";
            
              }} 
            
            >
              <img className="div4_gifBackground" src={gifOpt[i]} alt="" style={{ width: picSize[i][0] + "px", height: picSize[i][1] + "px", visibility: "hidden" }}
                onMouseOver={(e) => {
                  e.target.closest("A").style.background = 'none';
                  e.target.style.visibility = 'visible';
                  
                }}
              
                onMouseLeave={(e) => {
                  e.target.style.visibility = 'hidden';
                    e.target.closest("A").style.background = `url(${picOptions[i]}) no-repeat`;
                    e.target.closest("A").style.backgroundPosition = "center";
                    e.target.closest("A").style.backgroundSize = "cover";
                    e.target.closest("A").style.width = picSize[i][0]+ "px";
                    e.target.closest("A").style.height = picSize[i][1] + "px";
                }}
              
              
              />
                  </a>

          {/* <img src={picOptions[i]} /> */}
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
  const dogsGifArr = [
    "./app/pictures/gif/01_dog_piece.gif",
    "./app/pictures/gif/02_dog_angry.gif",
    "./app/pictures/gif/03_dog_fight.gif",
    "./app/pictures/gif/04_dog_happy.gif",
    "./app/pictures/gif/05_dog_sick.gif"
  ]

  /// в этом блоке картинки/гифки разного размера, поэтому размер задается динамически по размерам ниже
  const dogsPicSize = [
    [103, 103],
    [125, 125],
    [230, 125],
    [125, 125],
    [119, 119]
  ]
    ///описание для картинок 
  const dogsitterDescrArr = [
    "Умеют вытаскивать подобранный кусок из пасти собаки",
    "Поладят с собакой даже если у нее сложный характер",
    "Знают, как не допустить драку с другой собакой",
    "Знают язык тела собакена",
    "Знают, что делать, если собаке плохо"
  ];
//ниже списки гифок и картинок
  const catsArr = [
    "./app/pictures/cats/01_cat_play.png",
    "./app/pictures/cats/02_cat_happy.png",
    "./app/pictures/cats/03_cat_shhh.png",
    "./app/pictures/cats/04_cat_sick.png"
  ];

  const catsGifArr = [
    "./app/pictures/gif/01_cat_play.gif",
    "./app/pictures/gif/02_cat_happy.gif",
    "./app/pictures/gif/03_cat_shhh.gif",
    "./app/pictures/gif/04_cat_sick.gif",
  ]

   /// в этом блоке картинки/гифки разного размера, поэтому размер задается динамически по размерам ниже
  const catsPicSize = [
    [170, 170],
    [120, 120],
    [117, 117],
    [100, 100]
  ]

  ///описание для картинок 
  const catsitterDescrArr = [
    "Знают, как развлечь шерстяного",
    "Умеют ладить с любым котэ",
    "Знают язык тела кошки",
    "Знают, что делать, если кошке нездоровится",
  ];

//возвращает блок с картинками кобачек и блок к картинками кошек
  return (
    <div className="div4_content">
      <div className="div4_content_div">
        <h1>Наши dogsitters</h1>
        <CreateOurSittersOptions options={dogsitterDescrArr} picSize={dogsPicSize} picOptions={dogsArr} gifOpt ={dogsGifArr} classN="dogCatSittersBlockPict" classNComp="dogsittersCatsittersCan dogsittersCan" />
      </div>
      <div className="div4_content_div">
        <h1>Наши catsitters</h1>
        <CreateOurSittersOptions options={catsitterDescrArr} picSize={catsPicSize} picOptions={catsArr} gifOpt={catsGifArr} classN="dogCatSittersBlockPict catSittersBlockPict" classNComp="dogsittersCatsittersCan catsittersCan"/>
      </div>
    </div>
  )
}