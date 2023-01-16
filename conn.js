const mongoose = require("mongoose")

const myconnection = async () => {
   try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/testingf")
    .then(()=>{
        console.log("Connection Is Ok!")
    })
   } catch (err) {
      console.log(err)
      console.log("Error Occured")
   }


}
myconnection();


const userSchema = new mongoose.Schema({
   name:{
    type:String
   }
}
)

const mymod = new mongoose.model("user", userSchema)

module.exports = mymod;







