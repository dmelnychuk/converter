
let task = {"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}
///add ratio

let ratio = {
    "m": 1,
    "cm": 0.01,
    "in": 0.0254,
    "ft": 0.3048
  }


///transform values
function transform (data) {
    value = data.distance.value
    
    incomUnit = data.distance.unit 
    outcomUnit = data.convert_to 
    
    incomRatio = ratio[incomUnit]
    convToRatio = ratio[outcomUnit]
    
    result = (incomRatio / convToRatio) * value
    return result.toFixed(2) //round number 
}

//console.log(transform(task))

///extend functionality with additional values

ratio["mm"] = 1000;
ratio["yd"] = 1.094;
ratio["km"] = 0.001;


////////////////////////////////////////////////////////////////
////Task 2

const obj = {
    data: [
      { name: "John", email: "john2@mail.com" },
      { name: "John", email: "john1@mail.com" },
      { name: "Jane", email: "jane@mail.com" },
    ],
  };
  
  const test = {
    condition: {
      include: [{ name: "John" }],
      sort_by: ["email"],
    },
  };
  
///define key to check
  let nameInclude;
  for (let key in test.condition.include[0]) {
    nameInclude = key;
  }
  
//define variables to check values
  const dataName = test.condition.include[0][nameInclude];
  const sortEmail = test.condition.sort_by[0];
  
 //filter  object
  const resultInclude = obj.data
    .filter((o) => o[nameInclude] === dataName)

 //sort filtered
  const resultSorted = resultInclude
    .sort((a, b) => (b[sortEmail] > a[sortEmail] ? -1 : 1));
  
  const resultObj = { resultSorted };
//console.log(resultObj);

//// Extended variation
  let obj2 = 
    {"data": [
        {"user": "mike@mail.com", "rating": 20, "disabled": false},
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "john@mail.com", "rating": 25, "disabled": true}
    ],

        "condition":{
        "exclude": [{"disabled": true}], 
        "sort_by": ["rating"]
    }};

//define key 
let statusExclude;
for (let key in obj2.data[0]) {
    statusExclude = key;
}

//define variables to check values in object #2
const dataStatus = obj2.condition.exclude[0].disabled;
const sortRating = obj2.condition.sort_by[0]

//filter object #2
const resultStatus = obj2.data
 .filter((o) => o[statusExclude] !== dataStatus);

//sort filtered by rating
const resultRating = resultStatus
    .sort((a, b) => (b[sortRating] > a[sortRating] ? -1 : 1));

const resultObj2 = { resultRating };

//console.log(resultObj2);
    



///Task 3

/// Я не зовсім зрозумів умови завдання, тому з ним виякли деякі труднощі. 
///Водночас основу завдання - алгоритм бінарного пошуку (самий швидкий спосіб знайти точку) та фунцію для розрахунку відстані між двома точками, я написав.
///Не зовсім зрозумів, як саме все це потрібно з'єднати, тому вирішив відпривати як є.


let sortedArray = [...Array(101).keys()]; // array of possible searched item position
let key = 100; // can change to any variable x, y, z
let iCalls = 0;
let calls = [];


 function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
    

    while (start <= end) {
        iCalls++;
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {

            // found the key
            console.log(`Number of Calls :${iCalls}`);
            calls.push(iCalls);
            return middle; 
            
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // searching to the left
            end = middle - 1;
        }   
    }
	// key wasn't found
    return -1;
}


 //console.log(sortedArray[binarySearch(sortedArray, key)]); //test binary search


let datum = {"result": {
  "random_point": {"x": 10, "y": 10, "z": 10},
  "search_points": [{"x": 0, "y": 1, "z": 2}, {"x": 10, "y": 321, "z": 11}],

  }}

random_point = datum.result.random_point;
search_points = datum.result.search_points;

///function to calculate distance between two points 



///function to calculate distance between two points from each object in search_points array
function distance(){
    let distance = [];
    for (let i = 0; i < search_points.length; i++){
        let x = Math.abs(search_points[i].x - random_point.x);
        let y = Math.abs(search_points[i].y - random_point.y);
        let z = Math.abs(search_points[i].z - random_point.z);
        let amount = (x + y +z); ///I just calculate the whole distance, not the distance between two points. Not sure if that is exactl;y what was needed.
        distance.push(amount);
        console.log(`Distance between Random_point and Search_point(Index:${[i]}) is ${amount}`);
    }
    return distance;
}

console.log(distance())

