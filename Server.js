const mongoose= require('mongoose')
require("dotenv").config({path:"./.env"})
const Person= require ('./Person')


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })

/*//Create and Save a Record of a Model:
const person= new Person ({
    name:'chedi',
    age:26,
    FavFood:['Nwasser','Brik','Lablebi'] 
})
    person.save((err,data)=>
    err ? console.log('person not saved') : console.log('person saved')
    )
    
//Create Many Records with model.create()

Person.create ([{
    name:'zied',
    age:45,
    FavFood:['Maroc']
},
{
    name:'hamza',
    age:35,
    FavFood:['couscous']
},
{
    name:'taher',
    age:33,
    FavFood:['mlewi']
}
])
.then(data=> console.log('many person saved') )
.catch (err=> console.log('err')) */

//Use model.find() to Search Your Database
Person.find()
.then(data=> console.log('person with name found',data) )
.catch (err=> console.log('err'))

//Use model.findOne() to Return a Single Matching Document from Your Database
Person.findOne({FavFood:['mlewi']})
.then(data=> console.log('mlewi found') )
.catch (err=> console.log('err'))

//Use model.findById() to Search Your Database By _id
Person.findById('6009680cec40b4137b772994')
.then(data=> console.log('person with id found') )
.catch (err=> console.log('err'))

//Perform Classic Updates by Running Find, Edit, then Save
Person.findById('6009680cec40b4137b772994')
.then(data=> data.FavFood.push('humberger')
.then (person.save((err,data)=>
err ? console.log('new food not saved') : console.log('new food saved')
)) )
.catch (err=> console.log('err'))

//Perform New Updates on a Document Using model.findOneAndUpdate()
Person.findOneAndUpdate({name:'hamza'}, {age:20}, { new: true })
.then(data=> console.log('person updated') )
.catch (err=> console.log('err'))

//Delete One Document Using model.findByIdAndRemove
Person.findByIdAndRemove('6009680cec40b4137b772994')
.then(data=> console.log('person deleted'))
.catch (err=> console.log('err'))

//MongoDB and Mongoose - Delete Many Documents with model.remove()
Person.remove ({name:'zied'})
.then(data=> console.log('person removed'))
.catch (err=> console.log('err'))

//Chain Search Query Helpers to Narrow Search Results
Person.find({ FavFood: "Brik" }).sort({ name: 1 }).limit(2).select({ age: 0 }).exec((err, data) => {
    err ? console.log(err) : console.log('search',data) })
