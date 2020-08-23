const appDiv = document.getElementById('app')
appDiv.innerHTML = `<h1>Debug Example</h1>`

//get reference to list element in the html page
const list1 = document.getElementById('list1')

//function to be used as add button click handler
var addRowToList = function () {
  //get a reference to select element in the html page
  var combo = document.getElementById('select1')
  //read the value of selected option
  var selectedValue = parseInt(combo.options[combo.selectedIndex].value)
  // because options values start at zero we increase it by one
  selectedValue += 1
  //add the number of rows using loop
  for (var i = 0; i < selectedValue; i++) {
    // create an <li> element
    var newRow = document.createElement('li')
    //set the text of new row to current time
    newRow.innerHTML = new Date()
    //append <li> to list element
    list1.appendChild(newRow)
  }
}

//function to be used as delete button click handler
var deleteRow = function () {
  var len = list1.children.length
  if (len > 0) {
    var last = list1.children[len - 1]
    list1.removeChild(last)
  }
}

//get reference to button element
const addButton = document.getElementById('btnAdd')
//attach add event hanlder to button
addButton.addEventListener('click', addRowToList)

//get reference to button element
const delButton = document.getElementById('btnDel')
//attach delete event hanlder to button
delButton.addEventListener('click', deleteRow)

console.log('Fork this project then debug and fix the problems with this code')
