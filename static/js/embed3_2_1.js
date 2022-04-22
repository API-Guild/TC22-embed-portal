// fires when all html css and images are loaded, but doesn't wait for iframe content
window.onload = function () {
   viz = document.getElementById('tableauViz');
   console.log(viz);
   // call the ready() function when the tableau iframe is ready to interact with and fully loaded
   viz.addEventListener("firstinteractive", ready);
   }

// called when the tableau iframe content has chnged and is ready to interact with
function ready() {
  console.log("Viz has loaded!");
  activeSheet = viz.workbook.activeSheet;
  console.log("Active sheet:", activeSheet.name);
  console.log("Worksheet type:", activeSheet.sheetType);
  console.log("Workbook name:", viz.workbook.name);
  // determine what type of sheet it is, worksheet, dashboard or story
  switch (activeSheet.sheetType)
      {
        case 'worksheet':
        //this is just a placeholder to show as example
        break;
        case 'dashboard':
        console.log('Found Dashboard!')
          worksheets = activeSheet.worksheets;
          for(i=0;i<worksheets.length;i++)
          {
            console.log(worksheets[i].name); // Do anything you'd like with a given worksheet
            switch (worksheets[i].name) {
              // we're working with filters on the sheet called "Sales Map"
              case 'Sales Map':
                // need to save it with variable to use it later in other functions
                activeFilterSheet = worksheets[i];
                console.log('Found the sheet I need for filter: ', activeFilterSheet)
                break;
            }
          }
        break;
        case 'story':
        //this is just a placeholder to show as example
        break;
        }

}

function filterTableau(filterName, value, action = "replace") {
    activeFilterSheet.applyFilterAsync(filterName, value, action);
}

function filterClear(filterName) {
    activeFilterSheet.clearFilterAsync(filterName);
}

//sheet switching
function change_viz(url) {
  // siply set the src to the new sheet and it will render in the existing container/object
  // if onfirst interactive is set then it will trigger this again when the new src has loaded
    viz.src = url;
}

// revert all
function revertAll() {
  viz.revertAllAsync();
}
// undo last action
function undo() {
  viz.undoAsync();
}

// redo last action
function redo() {
  viz.redoAsync();
}
