const express = require('express');
const upload = require('./upload');
const expressFileUpload = require('./upload2');
const upload3 = require('./upload3');
const cors = require('cors');
const fileUpload = require('express-fileupload');



const server = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    allowedHeaders: "X-Requested-With,content-type",
    credentials:true
};

server.use(cors(corsOptions));
// server.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'POST');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
// server.use(fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 }
// }));

server.post('/upload', upload);
server.post('/upload2', fileUpload({limits: { fileSize: 50 * 1024 * 1024 }}) , expressFileUpload);
server.post('/upload3', upload3);

server.listen(8000, ()=> {
    console.log('server Started on 8000')
})