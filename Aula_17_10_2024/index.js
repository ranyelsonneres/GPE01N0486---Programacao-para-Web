const express = require('express') //instanciando o módulo (express)
const app = express()
const port = 3000

//rotas
app.get('/', (req, res) => {
  res.send('Página Inicial!')
})

app.get('/sobre', (req, res) => {
    res.send('Página Sobre');
})

//middleware para lidar com as rotas do tipo post
app.use(express.urlencoded({extended: true}));

app.post('/adicionar', (req, res) =>{  //localhost:3000/adicionar/nome=Ana (postman ou Curl)
    const nome = req.body.nome;
    res.send(`Nome: ${nome}`);
})

//testar a rota POST no terminal: curl -X POST http://localhost:3000/adicionar -d "nome=Fulano"​

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

