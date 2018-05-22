var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var concepts = joinList(conceptList);

function joinList(list) {
    var str = list[0];
    if (list.length > 0) {
      for (var i = 1; i < list.length; i++) {
        str += ", " + list[i];
      }
      return str;
    } else {
      return "";
    }
  }
console.log("Today I learned about " + concepts + ".");