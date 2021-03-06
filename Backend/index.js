const express = require('express');
const cors = require('cors');
const bodyParser    = require('body-parser');
const customerRoutes = require('./routers/customer-routes');
const serviceRoutes = require('./routers/service-routes');
const deviceRoutes = require('./routers/device-routes');
const entryRoutes = require('./routers/entry-routes');
const transactionRoutes = require('./routers/transaction-routes');
const accountRoutes = require('./routers/account-routes');

const app = express();


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/customers', customerRoutes);
app.use('/services', serviceRoutes);
app.use('/devices', deviceRoutes);
app.use('/entries', entryRoutes);
app.use('/transactions', transactionRoutes);
app.use('/accounts',accountRoutes);


app.get('/', (req,res) => {
    res.send("hello world, its express server")
});


app.listen(4000,()=>{
    console.log("server runing on port 4000");
})
