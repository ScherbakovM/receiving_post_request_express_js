import express, { response } from 'express'
import colors from 'colors'
import bodyParser from 'body-parser';

const app = express()
const PORT = 80

/**
 * bodyparser парсит тело пост запроса 
 */
app.use(bodyParser.urlencoded({ extended: true })) 

app.get('*', (req, res) => {
    res.send(`Sorry, we are unable to process the request : "${req.path}" `)
})

app.post('*', (req, res) => {
    console.lof("Данные с формы")
    console.log(colors.bgWhite.italic(req.body.name))
    console.log(colors.bgWhite.italic(req.body.surname))
    res.end('Данные отправлены')
})

app.listen(PORT, () => {
    console.log(colors.bgGreen(`Server has been started on port ${PORT}`))
})