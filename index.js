const express = require('express');
const app = express();
const PORT = 3000;




app.use(express.json());
app.use('/clients',require('./routes/Clients'))

app.use('/products',require('./routes/Products'))




app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`));