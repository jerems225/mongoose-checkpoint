const { isValidObjectId } = require("mongoose");
const personModel = require("../../models/person-model");


//remove person by Id
function removePerson(personId)
{
    const validId = isValidObjectId(personId)
    if(validId)
    {
        personModel.findByIdAndRemove(personId).then(result => {
            if(result && result.deleteCount > 0)
            {
                console.log("\n \n \n************  Person removed succesfully ************* \n \n \n", result)
            }
            else
            {
                console.log("\n \n \n************ Error:  Person not found ************* \n \n \n")
            }
        }).catch(err => {
            console.log('Something bad happened.', err);
        })
    }
    else
    {
        console.log(" \n \n \n************  Invalid Id, please provide a valid ObjectID ************ \n \n \n ")
    }

}

//remove persons by name
function removePersons(personName)
{
    personModel.remove({ name: personName }).then(result => {
        if(result && result.deleteCount > 0)
        {
            console.log("\n \n \n************  Person removed succesfully ************* \n \n \n", result)
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
removePerson("63c71e422bf8b0ca90c67472")
removePersons("Mary")