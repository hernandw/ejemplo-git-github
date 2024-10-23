import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/login', (req, res)=>{
    res.send('Login de usuario')
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
