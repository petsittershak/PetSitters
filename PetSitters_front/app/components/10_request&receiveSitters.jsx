
import DEFINE_URL_ADRESS from "./000_backend_key.jsx";

let sittersArr = [];

// const ondeSitter = {
//   picture:"./app/pictures/pic/petsitter_avatar3.jpg",
//   firstName: "Анастасия",
//   lastName: "Рим",
//   rating: "5.0",
//   age: 30,
//   completedOrders: 35,
//   joinedPetsittersDate: "13.06.2022",
//   title: "Dogsitter",
//   price: 1000,
//   priceFor: "передержка",
//   customersFeedbacks: "",
//   phone: "",
//   email:"",
//   priceTitle: "руб/сутки",
//   city: "Санкт-Петербург",
//   cityArea: "",
//   vet: false,
//   canHelpAlergicAnimal: true,
//   ownSertificate: false,
//   canCookHomeFood: true,
//   aboutSitter: "С радостью позабочусь о вашем четвероногом друге!",
//   description: "🐶 Подхожу к делу с особой любовью.Работаю из дома, поэтому ваш питомец всегда будет под чутким присмотром, рядом с домом есть прекрасный парк для прогулок и площадка для собак."
// }

  export default async function getSitters() {

      try {
          const response = await fetch(`http://${DEFINE_URL_ADRESS}/sitters/`, {
              method: "GET",
              headers: { "Accept": "application/json" }
          });
          if (response.ok === true) {
              // получаем данные
              const sitters = await response.json();
              sitters.forEach(sitter => {
                  sittersArr.push(sitter)
              });
          } else {
            console.log("response is not ok")
            sittersArr = null;
          }
      
      }
      catch (err) {
          console.log(err)
          sittersArr = null;
      }
          

    return sittersArr;
}
