const { isValidObjectId } = require("mongoose");
const personModel = require("../../models/person-model");

//update person by id and add hamburger to favoriteFood
function updatePerson(personId)
{
    const validId = isValidObjectId(personId)
    if(validId)
    {
       personModel.findByIdAndUpdate(personId, {$push: { favoriteFood : "hamburger"}}, {new : true}, (err, result) => {
        if(err)
        {
            console.log('Something bad happened.', err);
        }
        else
        {
            result.save((err, data) => {
                if(err)
                {
                    console.log('Something bad happened.')
                }
                else
                {
                    console.log("\n \n \n************  Person updated succesfully ************* \n \n \n", data)
                }
            })
        }
       })
    }
    else
    {
        console.log(" \n \n \n************  Invalid Id, please provide a valid ObjectID ************ \n \n \n ")
    }
}

//update person using findOneAndUpdate method
function updatePerson2(personName, personAge)
{
    personModel.findOneAndUpdate({ name : personName }, {$set : {
        age : personAge
    }}, {new : true}).then( result => {
        if(result)
        {
            console.log("\n \n \n************  Person updated succesfully ************* \n \n \n", result)
            return result
        }
        else
        {
            console.log("\n \n \n************ Error:  Person not found ************* \n \n \n")
        }
        
    }).catch(err => {
        console.log('Something bad happened.', err);
    })
}


//Call functions
updatePerson("63c71e422bf8b0ca90c67474")
updatePerson2("Claire", 20)
