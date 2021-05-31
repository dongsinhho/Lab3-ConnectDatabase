const fs = require('fs');
const path = require("path");

const contactController = {
    getContact: async (req, res) => {
        res.render('contact');
    },
    postContact: (req, res) => {
        validate(req.body);
        writeData(req.body);
        res.redirect('/contact');
    }
}

function validate(data) {
    // validate dữ liệu nhập vào nâng cao
    // if (name.length > 5)
    //     console.log("lỗi");
    console.log(data);

}

async function writeData(data) {
    var today = Date(Date.now());
    //var time = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " ";
    var text = data.name + "|" + data.mail + "|" + data.phone + "|" + data.message + "|" + today + "\n";
    await fs.appendFile(path.resolve(__dirname, "../database/Contact.txt"), text, function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

module.exports = contactController;