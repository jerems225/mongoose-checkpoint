const { isValidObjectId } = require("mongoose");
const personModel = require("../../models/person-model");

//find persons by fields name exist
function findPersons()
{
    personModel.find({ name : {$ne : "" } }).then( result => {
        return console.log("\n \n \n***********  All persons with name define \n",result)
    }).catch((err) => {
        console.log("Somethings Wrong, try again or check the error message", err)
    })
}

//find one person by favorite food
function findPerson(food)
{
    personModel.findOne({ favoriteFood : food }).then( result => {
        return console.log(`\n \n \n************  Person with ${food} as favorite food \n`,result)
    }).catch((err) => {
        console.log("Somethings Wrong, try again or check the error message", err)
    })
}


//find one person by id
function findPersonById(personId)
{
    const validId = isValidObjectId(personId)
    if(validId)
    {
        personModel.findById(personId).then(result => {
            return console.log(`\n \n \n************  Person with ${personId} as Id \n`,result)
        }).catch((err) => {
            console.log("Somethings Wrong, try again or check the error message", err)
        })
    }
    else{
        console.log(" \n \n \n************  Invalid Id, please provide a valid ObjectID ************ \n \n \n ")
    }

}

function searchQueryPerson(food)
{
    personModel.find({ favoriteFood : food })
        .sort({name : 1})
        .limit(2)
        .select({age: false})
        .exec((err,data) => {
            if(err)
            {
                console.log("Somethings Wrong, try again or check the error message", err)
            }
            else
            {
                return console.log(`\n \n \n************  Person with ${food} as favoriteFood \n`,data)
            }
        })
}

//Call functions
findPersons()
findPerson("Foutou")
findPersonById("63c71e422bf8b0ca90c67474")
searchQueryPerson("burritos")


