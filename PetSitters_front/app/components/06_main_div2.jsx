import React, { useState } from "react";


//в этом блоке идут картинки слева/справа и кекст, для достижения эффекта лесинки, использовала свой сво float left/right
//и применяла его в зависимости от четности элемента
function CreateDiv({ textOpt, headersOpt, picOpt }) {
  return (
    <div className="mainPageDiv2_2_block">
      {picOpt.map((opt, i) => {
        return(
          <div className="div2_picture" key={i}>
            <img src={opt} style={{
            width: "600px",
            height: "200px",
            borderRadius: "30px",
          float: `${(i%2==0) ? "right" : "left"}`
          }}/>
            <div className="mainPage_div_descript" style={{
              display: "inline-block",
              width: "500px",
              height: "200px",
              marginLeft: `${(i%2==0) ? "0px" : "60px"}`
            }}>
          <h2>{headersOpt[i]}</h2>
          <p>{textOpt[i]}</p>
          </div>
          <div></div>
      </div>)})

      }
      
    </div>
  );
}

const picturesRange = [
  "./app/pictures/pic/02_picture.jpg",
  "./app/pictures/pic/03_picture.jpg",
  "./app/pictures/pic/04_picture.jpg",
  "./app/pictures/pic/05_picture.jpg",
];
const descriptionRange = [
  "Sitters - самая важная часть нашей команды. Каждый из них проходит тщательный отбор, заполняет анкету, проходит собеседование, обучение и тестирование.",
  "Передержка выполняется в соответствии с регламентом, утвержденном хозяином питомца. Следование стандартам передержки sitter подтверждает ежедневными видеоотчетами.",
  "У нас работают люди, которые любят питомцев и умеют о них заботиться. Индивидуальный подход к каждому питомцу – отличие нашего сервиса передержки от гостиниц для животных.",
  "Берем на себя ответственность за передержку вашего питомца после заключения договора.",
];

const headersRange = ["Наши sitters", "Стандарты", "Забота", "Ответственность"];

export default function WhyChooseUs() {
  return (
    <div className="main_page_div2">
      <div>
        <h1>Почему именно мы?</h1>
      </div>
      <CreateDiv
        textOpt={descriptionRange}
        headersOpt={headersRange}
        picOpt={picturesRange}
      />
    </div>
  );
}
