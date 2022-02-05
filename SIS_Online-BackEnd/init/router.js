module.exports = (app) => {

    app.use('/', require("../routes/home.routes"));
    app.use('/auth', require('../routes/auth.routes'));
    app.use('/users', require('../routes/user.routes'));
    app.use('/programs', require('../routes/program.routes'));
    app.use('/courses', require('../routes/course.routes'));
    
}