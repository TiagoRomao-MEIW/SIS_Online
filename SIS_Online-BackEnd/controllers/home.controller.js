const fs = require("fs");
const Handlebars = require("handlebars");

exports.get = (req, res) => {

    let home = fs.readFileSync(__dirname + "/../views/home.hbs", "utf8");

    let compiled_page = Handlebars.compile(home)({
        title: "SIS Online",
        style: {
            background_color: "#aaaaaa",
            text_color: "#000000"
        },
        content: {
            logo: "../assets/images/uni.png",
            title: 'Student Information System - Gestão Académica'
        }
    });

    return res.status(200).send(compiled_page)

}