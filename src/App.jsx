import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Karakter } from './components/Karakter';
import { Film } from './components/Film';

const App = () => {
  const [state, setState] = useState([]);
  const [filmler, setfilmler] = useState([]);
  /*
   ADIM 1: Uygulama yüklendiğinde axios ile karakter datasını ve filmleri çekin:
    GET: https:workintech-fe-ecommerce.onrender.com/characters
    GET: https://workintech-fe-ecommerce.onrender.com/films
   * Bu 2 datayı da ayrı ayrı state'lere aktarın.
   * JSX'de; karakterler state'indeki her bir karakter'i .map ile Karakter component'ine tüm filmler ile gönderelim.
   * Karakter component'ine karakteri ve tüm filmleri prop olarak göndermeye dikkat.
  */
  useEffect(() => {
    axios
      .get('https://workintech-fe-ecommerce.onrender.com/characters')
      .then(function (response) {
        setState(response.data);
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    axios
      .get(' https://workintech-fe-ecommerce.onrender.com/films')
      .then(function (response) {
        // handle success
        setfilmler(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {state.map((karakter, index) => (
        <Karakter key={index} karakter={karakter} filmler={filmler} />
      ))}
    </div>
  );
};

export default App;
//eğer mapte köşeli parantezle kullanırsak o arrowdan sonraki parantez süslü olursa return etmeliyiz
