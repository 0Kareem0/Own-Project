const express = require('express');
const app = express();
const path = require('path');
const port = 3000
//Middleware
app.disable('etag')
app.disable('x-powered-by')
app.use(express.static('./public'))

//middleware
app.use(express.urlencoded({ extended: false }))


//Routes
// app.use(`/`,)

app.get('/',(req,res)=>{
    res.status(200).send('Hello World!')
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 