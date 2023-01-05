

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const cors = require("cors");
const fs = require('fs');

//routes
const users = require('./routes/api/users');
const admins = require('./routes/api/admins');

const posts = require('./routes/api/posts');
const voyageur = require('./routes/api/voyageur');
const chats = require('./routes/api/chat');
const complaints = require('./routes/api/complaint'); 
const notifications = require('./routes/api/notification');
const reservation  = require('./routes/api/reservation ');

require('./config/passport')(passport);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

//const db = require('./config/keys').mongoURI;
/*mongoose.connect(db, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() =>
        console.log('MongoDB successfully connected.')
    ).catch(err => console.log(err));
*/
mongoose.connect('mongodb://127.0.0.1:27017/personnel_Shoppers'
    , {
        useNewUrlParser: true,
        // useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('mongo connected')
    }).catch((err) => {
        console.log(err);
    })

app.use(passport.initialize());
//routes
app.use('/api/users', users);
app.use('/api/voyageurs', voyageur);
app.use('/api/complaints', complaints);
app.use('/api/admins', admins);
app.use('/api/posts', posts);
app.use('/api/chats', chats);
app.use('/api/notifications', notifications);
app.use('/api/reservations', reservation);
app.use('/static', express.static('public'));
var Publishable_Key = 'pk_test_51MBPevKNrVArcxobRF1wtNwVlInrbDSBTnDTBnrj5f6QslHHwYoYoLgO7CoHhFSdWxxFdh6EIIiJICGf9WcNbcqF00uYK1uoAK'
var Secret_Key = 'sk_test_51MBPevKNrVArcxobIs9Bi2a3VOj4FK18ZRs4wDO0FrEjR2S9CM3GwR7JgnH71gVgLpDFmDLtLWZm1ooe9jZpEJwM00XdSqzGug'; 
 
const stripe = require('stripe')(Secret_Key)

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
 
app.get('/', function(req, res){
    res.render('Home', {
       key: Publishable_Key
    })
})

app.post('/payment', function(req, res){
 
    // Moreover you can take more details from user
    // like Address, Name, etc from form
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Gourav Hammad',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '452331',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
        }
    })
    .then((customer) => {
 
        return stripe.charges.create({
            amount: 2500,     // Charging Rs 25
            description: 'Web Development Product',
            currency: 'INR',
            customer: customer.id
        });
    })
    .then((charge) => {
        res.send("Success")  // If no error occurs
    })
    .catch((err) => {
        
        res.send(err)       // If some error occurs
    });
})
//get all transactions stripe 

// app.get('/allpayment', async function(req, res){
//     const transactions = await stripe.issuing.transactions.list({
//         limit: 3,
//       });
//        console.log(" all transactions " ,transactions )
// })

// auto payement entre  adminstrateur et voyageur si une annonce est valide sa livraison 
// par le client une  transactions effectue automatique   cote admin  vers  compte  

 
//server
//const port = process.env.PORT || 3000;
const port = 5000 ; 


app.listen(port, () => console.log(`Server up and running on port ${port} !`));

