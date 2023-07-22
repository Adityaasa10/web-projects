import mongoose from "mongoose";
export const Connection =async(username, password)=>{
    URL=`mongodb+srv://${username}:${password}@cluster0.owymfsc.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    }catch(error){
        console.log('Erroe while connecting db',error.message);
    }
}
export default Connection;