var express = require("express");
var path = require("path");
var hbs = require("hbs");
var router = express.Router();
var app = express();
const http = require('http');


hbs.registerPartials(__dirname + 'views/partials');
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');


//ROUTES

app.get("/index", function(req, res) {
    res.render("index.hbs",{ mine: "my index page"});
});

app.get("/form", function(req, res) {
    res.render("form.hbs", { mine: "FORM index page", stuff:11});
});

app.get("/lab3",rand, function(req, res) {
    res.render("lab3.hbs", { num: req.num});
});

app.post("/lab3",rand, function(req, res) {
    res.render("lab3.hbs", { num: req.body.selection});
});

app.get("/about", function(req, res) {
    res.render("about.hbs", {stuff:11});
});

app.post("/results", function(req, res, next){
    //var id = req.body.name;
    res.render("results.hbs", {name: req.body.name, email: req.body.email, comments: req.body.comments, sec: req.body.selection})
    /*console.log(req);
    res.redirect("/results/"+id );*/
});

app.get('/*', function (req, res) {
    res.render('error.hbs', {});
  });





hbs.registerHelper('ran', ()=>{
    
    var loops = [3,4,5,10,20];
    var str='';
    for(let i=0; i<loops.length; i++)
    {
        str+=`<option value='${loops[i]}'>`;
        str+=loops[i];
        str+='</option>'
    }

    return new hbs.handlebars.SafeString(str)

})

hbs.registerHelper('grid', (num)=>{
    console.log(num);
    var str='';
    for(let i=0; i<num; i++)
    {
        str+='<tr>';
        for(let i=0; i<num; i++)
        {
            var color = ((1<<24)*Math.random()|0).toString(16);
            str+=`<td style='background-color:#${color};'>${color}<span style="color: #ffffff">${color}</span></td>`;

        }
        str+='</tr>'
    }

    return new hbs.handlebars.SafeString(str)

})

//LAB 3.2
hbs.registerHelper('error404', ()=>{
        
    var clases = ['still', 'rotate', 'shrink'];
    var rannum = Math.round(Math.random()*50);
    var str='';
    for(let i=0; i<rannum; i++)
    {
        var randomm = Math.floor(Math.random()*(clases.length-.9));
        str+=`<div class='${clases[randomm]}'>404`;
        str+='</div>'
    }

    return new hbs.handlebars.SafeString(str)

})

function rand(req, res, next)
{
    req.num = Math.round(Math.random()*25);
    next();
}

/*app.get('/',rand,(req, res)=>{
    res.render('index', {name:"Jay Aguiar's",
    num:req.num});
})*/







/*router.all('/', function(req, res, next){
    console.log('all')
    next
})

router.get('/form', function(req, res){
    res.render("form", {name: 'erick'})
})
router.post("/form", function(req, res){
    res.render("form.hbs", {title: req.body.name})
    res.status(200).end();
})*/

/*const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Handle post info...
                var body = '';
            req.on('data', function(data) {
                body += data;
            });
            req.on('end', function () {
                console.log(body);
                res.end('ok');
            });
    }
    else {
      res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="fname" /><br />
                <input type="number" name="age" /><br />
                <input type="file" name="photo" /><br />
                <button>Save</button>
            </form>
        </body>
        </html>
      `);
    }
});*/




app.listen(3000, () => {console.log("server running on port 3000")});