import express from 'express'; //express is a js framework to create a object from the express library
import cors from 'cors'; //cors is a library allows to connect react frontend and express backend
import mysql from 'mysql'; //connect to the sql database and write sql codes

const app = express(); //store features of express library
app.use(cors()); //use the created app object with cors library to connect with the frontend
app.use(express.json()); //to exchange data from frontend and backend (client <= API <= server <= database || data is flowing as JSON)

//create a connection to the database (database => server)
const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'pos'
});

app.get('/products', (req, res) =>{
  const q = 'SELECT * FROM products';
  db.query(q, (err, data) => {
    if(err){
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  })
})
app.listen(8080, () => {
    console.log('Server is running on port 8080');
})