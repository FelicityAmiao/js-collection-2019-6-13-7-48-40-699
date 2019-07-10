'use strict';

function grouping_count(collection) {

  //implement here
  let result = {};
  collection.reduce((obj, item) => {
    obj[item]? obj[item]++: obj[item] = 1;
    return obj;
  }, result);
  return result;
}

module.exports = grouping_count;
