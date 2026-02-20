/*fetch the data from the object*/

let marks = {
    harry : 90,
    kunal : 95,
    sopan : 37,
    swapnil : 60   
}

for(key in marks){
    console.log(key + " has " + marks[key]+ " marks")
}

//OR
const keys = Object.keys(marks); //stores the object keys in the form of array

for(let i = 0; i <  keys.length ; i++){
                console.log(keys[i], + " "+marks[keys[i]]) // accesing the data from the object
}
