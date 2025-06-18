const mongoose = require('mongoose');
const schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URL_CONNECTION, {
    //useCreateIndex: true,
    //useNewUrlParser: true,
})
.then(() => {
    console.log('connection ok !')
}).catch((err) => {
    console.log(err);
})
    
    
    
 