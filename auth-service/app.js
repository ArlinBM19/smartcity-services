const express = require('express');

const app = express();

const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Auth Service funcionando correctamente');
});

// Ruta de prueba login
app.post('/login', (req, res) => {

    const { email, password } = req.body;

    if(email && password){
        res.json({
            message: 'Inicio de sesión exitoso',
            user: email
        });
    } else {
        res.status(400).json({
            message: 'Faltan datos'
        });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor Auth Service ejecutándose en puerto ${PORT}`);
});
