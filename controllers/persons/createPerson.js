const personModel = require("../../models/person-model")

//create one person and save in the database
function createPerson(name, age, favoriteFood)
{
    const personObject = {
        name: name,
        age:age,
        favoriteFood: favoriteFood
    }

    //create instance of person Model
    let newPerson = new personModel(personObject)
    newPerson.save((err, data) => {
        if(err)
        {
            console.log('Something bad happened.')
        }
        return console.log("\n \n \n***********  New person \n",data)
    })
}


//create many persons and save them in database
function createManyPersons(arrayOfPeople)
{
    personModel.create(arrayOfPeople).then(result => {
        return console.log("\n \n \n***********  New persons \n",result)
    }).catch(err => {
        console.log("Somethings Wrong, try again or check the error message", err)
    })
}

//call functions
createPerson("jeremy", 32, ["Foutou", "Attieke"])

const arrayOfPeople = [
    {
        name : "Gedeo",
        age: 06,
        favoriteFood: ["burritos","Frites","Poulet"]
    },
    {
        name : "",
        age: 33,
        favoriteFood: ["Chips"]
    },
    {
        name : "Guyzo",
        age: 43,
        favoriteFood: ["burritos", "Salade"]
    },
    {
        name : "",
        age: 13,
        favoriteFood: ["Orange","Frites","burritos"]
    },
]
createManyPersons(arrayOfPeople)


