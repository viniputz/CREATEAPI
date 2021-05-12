const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/equips', (req, res) => {
    res.json({
        cpu: 'INTEL CORE i5',
        gpu: 'GTX 980 HOF' 
    })
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Vinicyus',
        email: 'vinicyusqmacedo@gmail.com'
    })
})

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})
app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})