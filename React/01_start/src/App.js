import React from "react";
import "./App.css";
import _04_FIO from "./Task1/04_FIO";
import _04_Phone from "./Task1/_04_Phone";
import _04_Email from "./Task1/_04_Email";

import F_City from "./Task2/F_City";
import F_Country from "./Task2/F_Country";
import F_Image from "./Task2/F_Image";
import F_Year from "./Task2/F_Year";

import C_City from "./Task3/C_City";
import C_Country from "./Task3/C_Country";
import C_Image from "./Task3/C_Image";
import C_Year from "./Task3/C_Year";

import F_Author from "./Task4/F_Author";
import F_Genre from "./Task4/F_Genre";
import F_Name from "./Task4/F_Name";
import F_Pages from "./Task4/F_Pages";

import C_Author from "./Task5/C_Author";
import C_Genre from "./Task5/C_Genre";
import C_Name from "./Task5/C_Name";
import C_Pages from "./Task5/C_Pages";

function App() {
  return (
    <>
      <h1>Задание 4</h1>
      <p>
        Создайте и запустите приложение React, выводящее краткую информацию о
        вас в браузер. Например: ФИО, контактный телефон, электронный адрес.
      </p>
      <_04_FIO />
      <_04_Phone />
      <_04_Email />

      <hr />
      <h1>Задание 1</h1>
      <p>
        Создайте и запустите приложение React, выводящее краткую информацию о
        вашем городе в браузер. Например: название города, название страны, год
        основания, несколько фотографий достопримечательностей вашего города.
      </p>
      <p>
        При разработке нужно использовать <strong> функциональные </strong>
        компоненты и синтаксис JSX.
      </p>
      <F_City />
      <F_Country />
      <F_Year />
      <F_Image />
      <hr />

      <h1>Задание 2</h1>
      <p>
        Реализуйте приложение из предыдущего задания, используя классовые
        компоненты.
      </p>
      <C_City />
      <C_Country />
      <C_Year />
      <C_Image />
      <hr />

      <h1>Задание 3</h1>
      <p>
        Создайте и запустите приложение React, выводящее информацию о вашей
        любимой книге в браузер. Например: название книги, ФИО автора, жанр
        книги, количество страниц, несколько рецензий на неё.
      </p>
      <p>
        При разработке нужно использовать функциональные компоненты и синтаксис
        JSX.
      </p>
      <F_Name />
      <F_Genre />
      <F_Author />
      <F_Pages />

      <hr />

      <h1>Задание 4</h1>
      <p>
        Реализуйте приложение из предыдущего задания, используя классовые
        компоненты.
      </p>
      <C_Name />
      <C_Genre />
      <C_Author />
      <C_Pages />
    </>
  );
}

export default App;
