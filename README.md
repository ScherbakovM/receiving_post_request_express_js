#### Получение  пост запросов через express js

создаем  package.json

`npm init -y`

Добаваляем библеотеку express js

`npm install express`

Добавляем nodemon - используется для автоматического перезапуска сервера после внесения  изменений

`npm install nodemon -g`

Импортируем express

`import express, { response } from 'express'`  

`app.use(bodyParser.urlencoded({ extended: true }))`  

`app.get('*', (req, res) => {res.send(`Sorry, we are unable to process the request : "${req.path}" `)})`  


<img width="1067" alt="image" src="https://github.com/ScherbakovM/receiving_post_request_express_js/assets/109952823/41ae0a8e-da45-47d1-b253-fa99d4f8785e">
