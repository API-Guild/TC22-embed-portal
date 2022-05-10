// revert all
function revertAll() {
  // Lesson 1
  // find the document element with the id tableauViz
  // set this to an object called viz
  // you can then use a method of this viz object to revert to initial view
  
  viz = document.getElementById('tableauViz');
  //viz.revertAllAsync();
}

// undo last action
function undo() {
  // Lesson 1
  // similar to the revertAll function
  
  //viz = document.getElementById('tableauViz');
  //viz.undoAsync();
}

// redo last action
function redo() {
  // Lesson 1
  // similar to the revertAll function
  
  //viz = document.getElementById('tableauViz');
  //viz.redoAsync();
}
