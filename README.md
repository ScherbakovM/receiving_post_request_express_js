#### Получение  пост запросов через express js

создаем  package.json

`npm init -y`

Добаваляем библеотеку express js

`npm install express`

Добавляем nodemon - используется для автоматического перезапуска сервера после внесения  изменений

`npm install nodemon -g`

Импортируем express

Создаём сервер app и определяем порт

`const app = express()`  
`const PORT = 80`  

`import express, { response } from 'express'`  

Указываем какой порт слушать нашему серверу

``app.listen(PORT, () => {console.log(`Server has been started on port ${PORT}`)})``

### Запускаем наше приложение 

`nodemon index` где index название файла

Сервер работает и запущен на 80 порту 

`localhost:80`  

### далее необходимо добавить логику обработки запросов 


<img width="874" alt="image" src="https://github.com/ScherbakovM/receiving_post_request_express_js/assets/109952823/2056a380-5635-46ab-8091-06f9b2623a2a">

