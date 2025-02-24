(function(window) {
  var byeSpeaker = {};

  byeSpeaker.speak = function(name) {
    console.log("Goodbye " + name);
  };

  // Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;
})(window);
