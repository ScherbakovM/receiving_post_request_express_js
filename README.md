### Получение  пост запросов через express js

### создаем  package.json

```
npm init -y
```

### Добаваляем библеотеку express js

```
npm install express
```

### Добавляем nodemon - используется для автоматического перезапуска сервера после внесения  изменений

```
npm install nodemon -g
```

### Импортируем express

```
import express from 'express'
```

### Создаём сервер app и определяем порт

```
const app = express()  
const PORT = 80
```  

### Указываем какой порт слушать нашему серверу

```
app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`)
})
```

### Запускаем наше приложение 

```
nodemon index
```
где index название файла

### Сервер запущен на 80 порту 

```
localhost:80
``` 


<img width="428" alt="image" src="https://github.com/ScherbakovM/receiving_post_request_express_js/assets/109952823/1b2684bd-7c3e-4a4c-b988-b8a0738af80e">


### Далее необходимо добавить логику обработки запросов 

### Обработка get запроса 

___В данном примере при переходе(запросе) на корневую дирректорию нашего сайта / в ответ мы отправляем пользователю функцией send() текст___



```
app.get('/', (req, res) => {
  res.send('Это корневая директория')
})
```



<img width="336" alt="image" src="https://github.com/ScherbakovM/receiving_post_request_express_js/assets/109952823/64f3ae2b-afe3-45b2-b9b5-651096664bd5">


### Обработка post запроса 

### Для того чтобы мы могли распарсить данные формы нам потребуется импортировать модуль bodyParser 

```
import bodyParser from 'body-parser';

```

### Добавляем его в наш сервер 

```
app.use(bodyParser.urlencoded({ extended: true }))
```

### И создаём метод обработки запроса  дляпримера попробуйте вывести req полностью и посмотреть что в нём содержится 
### В этом примере мы знаём что ожидаем в body name и surname и выводим их в консоль

```
app.post('*', (req, res) => {
  console.log("Данные с формы")
  console.log(req.body.name)
  console.log(req.body.surname)
  res.end('Данные отправлены')
})
```

## Полный код

### Модуль  colors  здесь выводит в консоль лог с background заданного цвета, его использовать необязательно

```
import express from 'express'
import colors from 'colors'
import bodyParser from 'body-parser';

const app = express()
const PORT = 80


app.use(bodyParser.urlencoded({ extended: true })) 

app.get('/', (req, res) => {res.send('Это корневая директория')})

app.post('*', (req, res) => {
    console.log("Данные с формы")
    console.log(colors.bgWhite.italic(req.body.name))
    console.log(colors.bgWhite.italic(req.body.surname))
    res.end('Данные отправлены')
})

app.listen(PORT, () => {
    console.log(colors.bgGreen(`Server has been started on port ${PORT}`))
})

```
