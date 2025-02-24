(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    // Get the first letter of the name, converted to lowercase.
    var firstLetter = name.charAt(0).toLowerCase();

    // If the first letter is 'j', use byeSpeaker; otherwise, use helloSpeaker.
    if (firstLetter === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
