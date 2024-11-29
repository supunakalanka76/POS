import express from 'express'; //to write backend codes
import cors from 'cors'; //connect to frontend (to request)
import mysql from 'mysql'; //connect to database and write sql codes

const app = express();
app.use(cors()); //connect frontend and backend
app.use(express.json()); //to exchange data from frontend and backend (node.js)

//connect backend and database
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