
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
  

  let nameInclude;
  for (let key in test.condition.include[0]) {
    nameInclude = key;
  }
  
  const dataName = test.condition.include[0][nameInclude];
  const sortEmail = test.condition.sort_by[0];
  
  
  const resultInclude = obj.data
    .filter((o) => o[nameInclude] === dataName)

 
  const resultSorted = resultInclude
    .sort((a, b) => (b[sortEmail] > a[sortEmail] ? -1 : 1));
  
  const resultObj = { resultSorted };
//   console.table(resultObj);

////
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


let statusInclude
for (let key in obj2.data[0]) {
    statusInclude = key;
}

const dataStatus = obj2.condition.exclude[0].disabled;
console.log(dataStatus);

const resultStatus = obj2.data
 .filter((o) => o[statusInclude] === dataStatus);
 
console.log(obj2.data);

console.log(resultStatus);