module.exports = {
    mongodb: {
        uri: "mongodb+srv://pwa:meiw_2022@cluster0.my0is.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        collections: {
            user: 'users',
            program: 'programs',
            course: 'courses'
        }
    },
    auth: {
        expiration_time: 150000,
        issuer: "MEIW|PWA-75309"
    },
    sanitize: {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzŠŒŽšœžŸ¥µÀÁÂÃÄÅÆÇÈÉÊËẼÌÍÎÏĨÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëẽìíîïĩðñòóôõöøùúûüýÿ\\ ",
        numerical: "0123456789"
    }
}