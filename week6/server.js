const express = require('express')
require('./db/mongoose/mongoose.js')
const hbs = require('hbs')
const app = express()

let User = require('./db/models/User.js')


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended:true}))


//ROUTES
app.get('/', (req, res) =>{
    res.render('index.hbs')
})

app.get('/view.hbs', (req, res) =>{
    res.render('view.hbs')
})

app.get('/index', (req, res) =>{
    res.render('index.hbs')
})


//END OF ROUTES





app.post('/results', function(req, res){
    
    let user = new User(req.body)

    user.save().then(function(){
        res.render('results.hbs', {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department,
            startDate: req.body.startDate, 
            jobTitle: req.body.jobTitle, 
            salary: req.body.salary
        })
        res.status(200).send(user)
    }).catch(function(e){
        res.status(400).send(e);

    })
    //res.render('results.hbs', {name: req.body.name, email: req.body.email})
})


/* ************************************************************* */
app.get('/view', function(req, res){
    //db.User.find()
    var comeback = User.collection.find({}).toArray()
    User.find({}, function(err, result){
        if(err)
            return res.status(400).send(err);
            var nas = comeback;
            console.log(nas);
        // here were are passing to our view all the elements we got from out query
        res.render('view.hbs', { title: 'Express', firstName: result.firstName});
    });
})
/* ************************************************************* */



app.post('/results', (req, res)=>{
    res.render('results.hbs', {firstName: req.body.firstName, lastName: req.body.lastName, startDate: req.body.startDate, jobTitle: req.body.jobTitle, salary: req.body.salary })
})



app.listen(3000, () => {
    console.log("running on port 3000");
})

