"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const videos_routes_1 = require("./routes/videos.routes");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const cors = require('cors');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS");
    next();
});
app.use(cors());
// console.log(process.env)
app.use(express_1.default.json());
app.use('/user', user_routes_1.userRoutes);
app.use('/videos', videos_routes_1.videoRoutes);
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
app.listen(4000);
