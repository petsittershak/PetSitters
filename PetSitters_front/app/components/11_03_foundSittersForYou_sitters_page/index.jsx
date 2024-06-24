import React, { useState } from "react";
import SitterSmallProfile from "../sitterSmallProfile/index.jsx";
import getSitters from "../request$receiveSitters/index.jsx"

  const sittersArr = await getSitters();
    console.log(sittersArr);

export default function FoundSitters() {
////дефолтные объекты ситтеров на случай неответа с сервера
  const petSittersProfilesArr = [
    {
      picture: "./app/pictures/pic/petsitter_avatar2.jpg",
      firstName: "Иринa",
      lastName: "Орлова",
      rating: "5.0",
      age: 50,
      completedOrders: 50,
      joinedPetsittersDate: "13.06.2020",
      title: "Dogsitter",
      price: 1700,
      priceFor: "передержка",
      customersFeedbacks: "",
      phone: "",
      email: "",
      priceTitle: "руб/сутки",
      city: "Москва",
      cityArea: "Химки",
      vet: true,
      canHelpAlergicAnimal: true,
      ownSertificate: true,
      canCookHomeFood: true,
      aboutSitter: "Опытный кинолог позаботится о вашем любимце!",
      description: "С радостью приму вашего любимца в нашу семью. Я проживаю в просторной 2-ух комнатной квартире в центре Петербурга. Рядом с домом есть парк, в котором вашему питомцу будет где разгуляться. Сама по профессии я инструктор-кинолог, опыт работы со служебными собаками более 10 лет. Четко буду соблюдать ваши нормы кормления, прогулки 2-3 раза в день, для вашего спокойствия могу отправлять каждый день фотоотчеты.Так же со мной живет дружелюбная девочка хаски по кличке Леди, вашему питомцу точно будет не скучно. Животных я очень люблю, по этому вы можете быть уверены, что ваша",
    },
  
    {
      picture: "./app/pictures/pic/petsitter_avatar1.jpg",
      firstName: "Константин",
      lastName: "Иванов",
      rating: "5.0",
      age: 50,
      completedOrders: 35,
      joinedPetsittersDate: "13.06.2022",
      title: "Catsitter",
      price: 1500,
      priceFor: "передержка",
      customersFeedbacks: "",
      phone: "",
      email: "",
      priceTitle: "руб/сутки",
      city: "Москва",
      cityArea: "",
      vet: true,
      canHelpAlergicAnimal: false,
      ownSertificate: true,
      canCookHomeFood: true,
      aboutSitter: "Кошатник со стажем",
      description: "Я работаю удалённо, поэтому собака будет постоянно находиться под присмотром. Рядом с домом есть просторное поле для любителей побегать"
    },
    {
      picture: "./app/pictures/pic/petsitter_avatar3.jpg",
      firstName: "Анастасия",
      lastName: "Рим",
      rating: "5.0",
      age: 30,
      completedOrders: 35,
      joinedPetsittersDate: "13.06.2022",
      title: "Dogsitter",
      price: 1000,
      priceFor: "передержка",
      customersFeedbacks: "",
      phone: "",
      email: "",
      priceTitle: "руб/сутки",
      city: "Москва",
      cityArea: "",
      vet: false,
      canHelpAlergicAnimal: true,
      ownSertificate: false,
      canCookHomeFood: true,
      aboutSitter: "С радостью позабочусь о вашем четвероногом друге!",
      description: "🐶 Подхожу к делу с особой любовью.Работаю из дома, поэтому ваш питомец всегда будет под чутким присмотром, рядом с домом есть прекрасный парк для прогулок и площадка для собак."
    },
    {
      picture: "./app/pictures/pic/petsitter_avatar2.jpg",
      firstName: "Иринa",
      lastName: "Орлова",
      rating: "5.0",
      age: 50,
      completedOrders: 50,
      joinedPetsittersDate: "13.06.2020",
      title: "Dogsitter",
      price: 1700,
      priceFor: "передержка",
      customersFeedbacks: "",
      phone: "",
      email: "",
      priceTitle: "руб/сутки",
      city: "Москва",
      cityArea: "Химки",
      vet: false,
      canHelpAlergicAnimal: true,
      ownSertificate: true,
      canCookHomeFood: true,
      aboutSitter: "Опытный кинолог позаботится о вашем любимце!",
      description: "С радостью приму вашего любимца в нашу семью. Я проживаю в просторной 2-ух комнатной квартире в центре Петербурга. Рядом с домом есть парк, в котором вашему питомцу будет где разгуляться. Сама по профессии я инструктор-кинолог, опыт работы со служебными собаками более 10 лет. Четко буду соблюдать ваши нормы кормления, прогулки 2-3 раза в день, для вашего спокойствия могу отправлять каждый день фотоотчеты.Так же со мной живет дружелюбная девочка хаски по кличке Леди, вашему питомцу точно будет не скучно. Животных я очень люблю, по этому вы можете быть уверены, что ваша",
    },
  
    {
      picture: "./app/pictures/pic/petsitter_avatar1.jpg",
      firstName: "Константин",
      lastName: "Иванов",
      rating: "5.0",
      age: 50,
      completedOrders: 35,
      joinedPetsittersDate: "13.06.2022",
      title: "Catsitter",
      price: 1500,
      priceFor: "передержка",
      customersFeedbacks: "",
      phone: "",
      email: "",
      priceTitle: "руб/сутки",
      city: "Москва",
      cityArea: "",
      vet: true,
      canHelpAlergicAnimal: false,
      ownSertificate: true,
      canCookHomeFood: true,
      aboutSitter: "Кошатник со стажем",
      description: "Я работаю удалённо, поэтому собака будет постоянно находиться под присмотром. Рядом с домом есть просторное поле для любителей побегать"
    },
    {
      picture: "./app/pictures/pic/petsitter_avatar3.jpg",
      firstName: "Анастасия",
      lastName: "Рим",
      rating: "5.0",
      age: 30,
      completedOrders: 35,
      joinedPetsittersDate: "13.06.2022",
      title: "Dogsitter",
      price: 1000,
      priceFor: "передержка",
      customersFeedbacks: "",
      phone: "",
      email: "",
      priceTitle: "руб/сутки",
      city: "Москва",
      cityArea: "",
      vet: false,
      canHelpAlergicAnimal: false,
      ownSertificate: true,
      canCookHomeFood: false,
      aboutSitter: "С радостью позабочусь о вашем четвероногом друге!",
      description: "🐶 Подхожу к делу с особой любовью.Работаю из дома, поэтому ваш питомец всегда будет под чутким присмотром, рядом с домом есть прекрасный парк для прогулок и площадка для собак."
    },
  ];


  let sitterCanOpt= ["vet", "canHelpAlergicAnimal", "ownSertificate", "canCookHomeFood"];
  const iconsLinks = {
    vet: "./app/pictures/sitterCan/vet.png",
    canHelpAlergicAnimal: "./app/pictures/sitterCan/canHelpAlergicAnimal.png",
    ownSertificate: "./app/pictures/sitterCan/ownSertificate.png",
    canCookHomeFood: "./app/pictures/sitterCan/canCookHomeFood.png"
    }

    
  //функция публикует профайлы ситтеров на страницу ситтеров, и если они не были загружены с сервера,
  // функция берет дефолтные значения для примера из petSittersProfilesArr
  return (
    <div className="sitters_page_foundSitters" id="sitters_page_foundSitters">
      <h1> Нашли для вас подходящих sitters</h1>
      <div className="sitters_page_suggestedSitters">
        {((sittersArr && sittersArr.length !== 0 ) ? sittersArr: petSittersProfilesArr).map((sitter, i) => { return <SitterSmallProfile sitterObj={sitter} iconsLinksOpt={iconsLinks} sitterCan={sitterCanOpt} key={i} extraClassWidth="sittersPageProfile" extraClassBtnWidth="sittersPageProfileBtn"/>})}
      </div>
    </div>
  )
}