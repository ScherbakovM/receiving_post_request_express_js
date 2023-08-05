#### Получение  пост запросов через express js

создаем  package.json

`npm init -y`

Добаваляем библеотеку express js

`npm install express`

Добавляем nodemon - используется для автоматического перезапуска сервера после внесения  изменений

`npm install nodemon -g`

Импортируем express


`const app = express()`  
`const PORT = 80`  

`import express, { response } from 'express'`  
``app.listen(PORT, () => {console.log(colors.bgGreen(`Server has been started on port ${PORT}`))})``  


<img width="1067" alt="image" src="https://github.com/ScherbakovM/receiving_post_request_express_js/assets/109952823/41ae0a8e-da45-47d1-b253-fa99d4f8785e">
