// revert all
function revertAll() {
  viz = document.getElementById('tableauViz');
  viz.revertAllAsync();
}

// undo last action
function undo() {
  viz = document.getElementById('tableauViz');
  viz.undoAsync();
}

// redo last action
function redo() {
  viz = document.getElementById('tableauViz');
  viz.redoAsync();
}
