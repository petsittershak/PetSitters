
import DEFINE_URL_ADRESS from "../000_backend_key.jsx";

let sittersArr = [];


///функция которая запрашивает профайлы ситтеров в сервера и возвращает sittersArr в который запушила результаты запроса
//если не получает ответ  от сервера или происходит ошибка, по применяет sittersArr значение null
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
