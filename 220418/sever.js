const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})



app.get('/', (req, res)=> {
    console.log(req.headers)
    // 곽인구

    res.setHeader('Set-Cookie', 'token=true')
    res.render('index')
})

app. get('/getCookie', (req,res) =>{
    const [name, value] = req.headers.cookie.split('=')
    console.log(name, value)
    res.send('hello~~~')
})

app.listen(3000, ()=> {
    console.log('server start')
})