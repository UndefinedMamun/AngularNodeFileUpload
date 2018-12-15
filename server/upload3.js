const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ 
    storage: storage,
    limits: {fileSize: 50*1024*1024}
}).array('file', 8);

module.exports = function upload3(req, res) {
    upload(req, res, (err)=>{
        if(err){
            console.log(err)
            return res.send({err});
        }

        console.log(req.files)
        return res.json({working: 'ok'})
    })
};