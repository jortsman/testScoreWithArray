var entry;
var average;
var scores = [];
var total = 0;
var show = "Test test scores:\n";

do {
  entry = prompt("Please enter a test score. \n Or enter 999 to end your entries",999);
  entry = parseInt(entry);
  if (entry >= 0 && entry <= 100) {
    scores[scores.length] = entry;
  } else if (entry != 999){
    alert('Please enter a number between 0 and 100');
  }
} while (entry != 999);

for (var i = 0; i < scores.length; i++) {
  total = total + scores[i];
  show = show + scores[i] + "\n";
}

average = parseInt(total/scores.length);
alert(show + 'Your average score is: '+ average);
