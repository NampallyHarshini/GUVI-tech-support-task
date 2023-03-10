import mongoose from 'mongoose'

function ConnectToDb() {
    mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
   
    const db = mongoose.connection;
    db.on('error',console.error.bind(console,'Connection error..'))
    db.once('open',()=>{
        console.log('Mongodb connected successful..')
    })

}


export default ConnectToDb;
Footer
