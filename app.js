const express = require ('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req,res)=>{
res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

app.listen(process.env.PORT || 3000, () =>  {
    console.log("El servidor está corriendo en el puerto 3000")
});

