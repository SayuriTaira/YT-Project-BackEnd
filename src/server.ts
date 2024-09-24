import express from 'express'
import { userRoutes } from './routes/user.routes'
import { videoRoutes } from './routes/videos.routes'
import { config } from 'dotenv'

config()
const app = express()

const cors = require('cors')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS")
    next()
})

app.use(cors())

// console.log(process.env)

app.use(express.json())
app.use('/user', userRoutes)
app.use('/videos', videoRoutes)

// app.get('/', (request, response) => {
//     response.send('Você acessou o servidor')
// })

// app.get('/users', (request, response) => {
//     response.json([{name: 'Sayuri', age: 16}, {name: 'Karen', age: 22}])
// })

// app.post('/userdata/:id', (request, response) => {
//     console.log(request.body)
//     console.log(request.params)
//     console.log(request.query)
//     console.log(request.headers)
//     response.status(200).json({success:true})
// })

app.listen(4000)