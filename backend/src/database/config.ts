import mongoose from "mongoose";

const dbConnection = async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL!,{
      dbName: 'schedule-track'
    });

    console.log('Has been connected to: ');
  }catch(err){
    console.log(err)
    throw new Error('Error a la hora de iniciar la base de datos');
  }
}

export default dbConnection;
