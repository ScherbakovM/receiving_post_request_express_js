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



<img width="645" alt="image" src="https://github.com/ScherbakovM/receiving_post_request_express_js/assets/109952823/a52bc8bf-89de-4259-817c-90e51acda20e">


### Далее необходимо добавить логику обработки запросов 
