
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

console.log(transform(task))

///extend functionality with additional values

ratio["mm"] = 1000;
ratio["yd"] = 1.094;
ratio["km"] = 0.001;


