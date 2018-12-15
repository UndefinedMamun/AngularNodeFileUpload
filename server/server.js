const express = require('express');
const upload = require('./upload');
const expressFileUpload = require('./upload2');
const upload3 = require('./upload3');
const cors = require('cors');
const fileUpload = require('express-fileupload');



const server = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));
// server.use(fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 }
// }))

server.post('/upload', upload);
server.post('/upload2', fileUpload({limits: { fileSize: 50 * 1024 * 1024 }}) , expressFileUpload);
server.post('/upload3', upload3);

server.listen(8000, ()=> {
    console.log('server Started on 8000')
})