const coursesRouter = require('./courses');
const femaleRouter = require('./female');
const coupleRouter = require('./couple');
const detailRouter = require('./detail');
const creatRouter = require('./creat');
const loginRouter = require('./login');
const registerRouter = require('./register');
const cartRouter = require('./cart');
const paymentRouter = require('./payment');
const searchRouter = require('./search');
// const editRouter = require('./edit');


function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/female', femaleRouter);
    app.use('/couple', coupleRouter);
    app.use('/detail', detailRouter);
    app.use('/creat', creatRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/cart', cartRouter);
    app.use('/payment', paymentRouter);
    app.use('/search', searchRouter);
    // app.use('/update', updateRouter);
    // app.use('/edit', editRouter);
    // app.use('/', siteRouter)
    app.get('/logout',(req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    })
}

module.exports = route;