var recipes = {};
// returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

// 1) returns object without the delete key/value pair
// 2) modifies the original object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}