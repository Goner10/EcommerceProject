const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());



app.use('/products',require('./routes/Products'))

app.use('/clients',require('./routes/Clients'))

app.use('/categories',require('./routes/Categories'))


app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`));