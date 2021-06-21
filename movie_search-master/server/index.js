const express=require("express")
const mongoose=require('mongoose')
const path=require('path')
const cors=require('cors')
const bodyParser=require('body-parser')
const routes=require('./model/routes')

mongoose.connect("mongodb+srv://sunnny:b6e8ZhrCreFnQy0m@peoplesquotes-uo1tl.mongodb.net/sunny?retryWrites=true&w=majority"
,{ useNewUrlParser: true,useUnifiedTopology: true  });
let db=mongoose.connection



db.on('error',(err)=>{
  console.log(err)
})
db.once('open',()=>{
  console.log('database is running')
})

const app=express();
let Article=require('./model/article')

app.use(cors())

// app.set('views',path.join(__dirname ,'views'))
// app.set('view engine','pug')


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))
app.use('/api',routes)

app.get('/favourite',(req,res,next)=>{
  Article.find(function(err,Article){
      res.json(Article)
  })
})
app.post('/favourite', (req, res) => {
  console.log(req.body);
  db.collection('articles').insertOne(req.body, (err, data) => {
      if(err) return console.log(err);
      res.send(('saved to db: ' + data));
  })
});
app.delete('/favourite/:id', (req, res, next) => {
  db.collection('articles').deleteOne({_id:req.body}, (err, data) => {
    console.log("i am called")
    if(err) return console.log(err);
   
  })
});

// app.get('/' ,(req,res)=>{
//   Article.find({},(err,articles)=>{
//     if(err) console.log(err)

//     res.render('addArticles',{
//       title:"article",
//       articles:articles
//     })
    
//   })

// })
// app.get('/addArticles' ,(req,res)=>{
//   res.render('add_articles',{
//     title:"article",
    
//   })
  
// })

//   app.post('/articles/add',(req,res)=>{
//     let article=new Article()
//     article.title=req.body.title;
//     article.author=req.body.author;
//     article.body=req.body.body;
//     article.save((err)=>{ 
//       if(err){ console.log(err) 
//       return
//       }
//       else{
//       res.redirect('/articles/add')
//       }
//     }) 
//   })   

// app.get('/article/:id',(req,res)=>{
//   Article.findById(req.params.id,(err,article)=>{
//     if(err) console.log(err)
//     res.render('article',{
//       article:article
//     })

//   })
// })  
// app.get('/articles/edit/:id',(req,res)=>{
//   Article.findById(req.params.id,(err,article)=>{
//     if(err) console.log(err)
//     res.render('article_update',{
//       article:article
//     })

//   })
// })  

 
// app.post('/articles/edit/:id',(req,res)=>{
//   let article={};
//   article.title=req.body.title;
//   article.author=req.body.author;
//   article.body=req.body.body;
//   let querry={_id:req.params.id}
//   Article.update(querry,article,(err)=>{
//     if(err){ console.log(err) 
//     return
//     }
//     else{
//     res.redirect('/')
//     }
//   }) 
// })  

app.get('/',(req,res)=>{
  res.send('foober')
})

app.listen(5000,(err)=>{
  if(err) console.log(err)

  console.log("listening on port 5000...")
})