const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Client is running')
})

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.get('/', function(req, res){
    res.render('index')
})
