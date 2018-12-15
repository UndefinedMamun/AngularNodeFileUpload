const path = require('path');

module.exports = function upload2(req, res) {
    console.log(req.files);
    var file = req.files.file;
    file.mv(`./uploads/myfile-${Date.now()}-${path.extname(file.name)}`, (err)=>{
        if(err) {
            console.log(err);
            return res.status(500).send({err});
        }

        return res.status(200).send({ok: true})
    })

    //for multiple file at a time.
    // req.files.file.forEach(file => {
    //     file.mv(`./uploads/myfile-${Date.now()}-${path.extname(file.name)}`, (err)=>{
    //         if(err) {
    //             console.log(err);
    //             return res.status(500).send({err});
    //         }
    //     })
    // });

    // return res.status(200).send({ok: true})
    
    
};