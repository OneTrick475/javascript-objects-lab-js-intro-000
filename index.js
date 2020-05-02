function updateObjectWithKeyAndValue(object, key, value){
  object.assign = (newObj, object, { [key]: value} )
  return newObj;
  }
