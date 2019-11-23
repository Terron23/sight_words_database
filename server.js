const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg');
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)



const client = new Client({
    user: 'sqjvdrybhlsaup',
    host: 'ec2-107-22-216-53.compute-1.amazonaws.com',
    database: 'd7fcqq0d1n0qhp',
    password: '04b6aa5504783e5686dc86325ac67c3756bdfe0269f47a27ebbb000f814efced',
    port: 5432,
    connectionString: "postgres://sqjvdrybhlsaup:04b6aa5504783e5686dc86325ac67c3756bdfe0269f47a27ebbb000f814efced@ec2-107-22-216-53.compute-1.amazonaws.com:5432/d7fcqq0d1n0qhp",
    ssl: true,
  });
  
  client.connect();
  



  const getSightWords = (request, response) => {
    client.query("Select distinct id, word from sightwords order by id desc", (error, results) =>{
        if (error) {
            throw error
          }

          response.status(200).json(results.rows)
    })  
  }


  const addSightWords = (request, response) => {
    const {words} = request.body

    client.query(`Insert into SightWords(word) values('${words}')`, (error) =>{
        if (error) {
            throw error
          }

          response.status(200).json(words + "Successfull Added")
    })  
  }


  const deleteSightWords = (request, response) => {
    const {id} = request.body
    client.query(`delete from SightWords where id =${id}`, (error) =>{
        if (error) {
            throw error
          }

          response.status(200).json(id + "Succesfully Removed")
    })  
  }

  app.use(express.static(path.join(__dirname+'/client/build')))


  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.get('/api/sight_words', getSightWords);

app.post('/api/add_words', addSightWords);

app.delete('/api/delete_words', deleteSightWords);



  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })