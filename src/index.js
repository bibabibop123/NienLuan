const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require('connect-flash');
const path = require("path");
const Course = require("./app/models/Course");
const { paymentStatusConverString } = require("./config/enum.config");
const app = express();
const port = 3000;

const db = require("./config/db");

const bodyParser = require("body-parser");

const route = require("./routes");

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

// HTTP logger
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "ac@ncn12dn245cjhfn",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use((req,res,next)=>{
  const message = req.flash('message');
  if(message){
    res.locals.message= message
  }
  next();
})
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      multiply:(a,b)=>a*b,
      equal: (a,b)=> a ==b,
      different :(a,b)=>a!=b,
      paymentStatusConverString: paymentStatusConverString,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));




app.use(bodyParser.json());
app.use((req,res,next)=>{
  if(req.session.user){
      req.user = req.session.user;
      res.locals.user = req.session.user;
  }
  next();
})

route(app);

app.get("/", async (req, res, next) => {
  const array_male = await Course.find({ type: "male" }).limit(8).lean();
  const array_female = await Course.find({ type: "female" }).limit(8).lean();
  const array_couple = await Course.find({ type: "couple" }).limit(4).lean();
  console.log('res.locals',res.locals.user);
  return res.render("home", {
    male: array_male,
    femaleList: array_female,
    couplelist: array_couple,
  });

  // Course.find({}).limit(10)
  //   .then(courses => {
  //     courses = courses.map(Course => Course.toObject())
  //     res.render('home', {courses:array_male});
  //   })
  //   .catch(next);
  // res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
