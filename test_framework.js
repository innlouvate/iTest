exports.test = function(name, test) {
  console.log(name, ":", test);
}

exports.assert = {
  equals: function (a, b) {
    if ( a === b ) {
      return "Test PASSES";
    } else {
      return `Test FAILS: Expected ${a}, returned ${b}`;
    }
  }
}
