

var tableHead, tableBody, table;
var c_list = 0;
var v_list = 0;
var b_list = 0;
var n_list = 0;
var m_list = 0;
var curr_list = [];
var min_anim = 3;
var max_anim = 9;
var full_list = 25;
var targetdiv = '';
var click_flag = false;



$("document").ready(function() {
  
  load_numbys();

});




function load_numbys() {
  
  num_rows = 48;
  head_name = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
              'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
              'AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM',
              'AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ'];
  
  // Create table element
  table = $('#spreadsheet');

  // Create table header row
  tableHead = $('<thead>');
  var headerRow = $('<tr>');
  
  for (var i = 0; i < head_name.length; i++) {
    headerRow.append('<th>' + head_name[i] + '</th>');
  }
  
  tableHead.append(headerRow);

  // Create table body
  tableBody = $('<tbody>');

  // Add rows to the table body
  for (var i = 1; i <= num_rows; i++) {
    var row = $('<tr>');
    row.append('<th>' + i + '</th>');
    
    temp_list = generateRandomNumbers(52,0,9);
    
    for (var j = 0; j < temp_list.length; j++) {
      row.append('<td style="animation-duration: '+ 
                  generateRandomNumby(min_anim, max_anim) +'s;">' + 
                  temp_list[j] + '</td>');
    }
    
    tableBody.append(row);
  }

  table.append(tableHead); // appeend head to table
  table.append(tableBody); // apppend body to table

  $('#spreads').append(table); // Append to spreads div

} // end of load numbys






function generateRandomNumbers(listLength, min, max) {
  const randomNumbers = [];
  for (let i = 0; i < listLength; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}


function generateRandomNumby( min, max) {

  return randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}


var spreadsheet = document.getElementById('spreadsheet');
let startCell = null;
let endCell = null;

// Function to highlight cells
function highlightCells(start, end) {
  // Clear previous highlights
  spreadsheet.querySelectorAll('td, th').forEach(cell => {
    cell.classList.remove('selected');
  });

  // Get the row and column indices
  const startRow = parseInt(start.parentNode.rowIndex);
  const startCol = parseInt(start.cellIndex);
  const endRow = parseInt(end.parentNode.rowIndex);
  const endCol = parseInt(end.cellIndex);

  // Highlight the cells within the selected range
  for (let row = Math.min(startRow, endRow); row <= Math.max(startRow, endRow); row++) {
    for (let col = Math.min(startCol, endCol); col <= Math.max(startCol, endCol); col++) {
      const cell = spreadsheet.rows[row].cells[col];
      cell.classList.add('selected');
    }
  }
}

// Event listener for starting selection
spreadsheet.addEventListener('mousedown', (event) => {
  if (event.target.tagName === 'TD' || event.target.tagName === 'TH') {
    startCell = event.target;
    endCell = startCell;
    highlightCells(startCell, endCell);
  }
});

// Event listener for dragging to select
spreadsheet.addEventListener('mousemove', (event) => {
  if (startCell && event.target.tagName === 'TD' || event.target.tagName === 'TH') {
    endCell = event.target;
    highlightCells(startCell, endCell);
  }
});

// Event listener for ending selection
spreadsheet.addEventListener('mouseup', () => {
  startCell = null;
  endCell = null;
});


// when a keyboard button is pressed
document.addEventListener('keydown', function(event) {
  
  click_flag = false;
  
  var elements = document.querySelectorAll(`.${'selected'}`);
  
  if (event.key === 'c' | event.key === 'C' ) { 
    var selects = elements.length ;
    c_list = c_list + selects;
    if (c_list >= 25) { c_list = 25;}
    new_width = '  ' + (c_list / full_list * 100) + '%';
    $('#barc').css('width', new_width);
    $('#barc').html(new_width);
    targetdiv = 'barcb';
    click_flag = true;
  } 
  
  if (event.key === 'v' | event.key === 'V' ) { 
    var selects = elements.length;
    v_list = v_list + selects;
    if (v_list >= 25) { v_list = 25;}
    new_width = '  ' + (v_list / full_list * 100) + '%';
    $('#barv').css('width', new_width);
    $('#barv').html(new_width);
    targetdiv = 'barvb';
    click_flag = true;
  } 
  
  if (event.key === 'b' | event.key === 'B' ) { 
    var selects = elements.length;
    b_list = b_list + selects;
    if (b_list >= 25) { b_list = 25;}
    new_width = '  ' + (b_list / full_list * 100) + '%';
    $('#barb').css('width', new_width);
    $('#barb').html(new_width);
    targetdiv = 'barbb';
    click_flag = true;
  } 
  
  if (event.key === 'n' | event.key === 'N' ) { 
    var selects = elements.length;
    n_list = n_list + selects;
    if (n_list >= 25) { n_list = 25;}
    new_width = '  ' + (n_list / full_list * 100) + '%';
    $('#barn').css('width', new_width);
    $('#barn').html(new_width);
    targetdiv = 'barnb';
    click_flag = true;
  } 
  
  if (event.key === 'm' | event.key === 'M' ) { 
    var selects = elements.length;
    m_list = m_list + selects;
    if (m_list >= 25) { m_list = 25;}
    new_width = '  ' + Math.round(m_list / full_list * 100) + '%';
    $('#barm').css('width', new_width);
    $('#barm').html(new_width);
    targetdiv = 'barmb';
    click_flag = true;
  } 
  
  
  if(click_flag) {
    
      var newTotal = (c_list + v_list + b_list + n_list + m_list ) / (5*full_list) * 100;
      var newTotal_text = ' ' + Math.round(newTotal) + '% Complete';
      $('#completeness').html(newTotal_text);
      
      
      // animate numbers falling into box
      
      numanimblock = document.getElementById("numanim");
      numanimblock.style.display = "block";
      
      for (var i = 0; i < elements.length; i++) {
        $('#numanim').append(elements[i].innerHTML);
        if(i % 10 == 0) {
          $('#numanim').append('<br>');
        }
      }
      //moveText(targetdiv);
      moveElement(targetdiv);
      
      for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = '';
      }
      
      // wait a second and reload numbers
      setTimeout(function() {
          elements = document.querySelectorAll(`.${'selected'}`);
          for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = generateRandomNumby(0,9);
          }
          
          // remove selected class
          document.getElementById('spreadsheet').querySelectorAll('td, th').forEach(cell => {
            cell.classList.remove('selected');
          });
          
          numanimblock.style.display = "none";
          numanimblock.style.top = "50%";
          numanimblock.style.left = "50%";
          numanimblock.innerHTML = '';
          
        }, 1000);
      
      // show message if program is completed
      if (newTotal >= 100) { document.getElementById("message").style.display = "block"; }
    
  } // end of certain buttoned was pressed
  
}); // end of keyboard button is pressed




// hides the message after program is completed and uses clicks to hide
function hideAlert() { document.getElementById("message").style.display = "none"; }



function moveElement(targetdiv) {
  const div = document.getElementById('numanim');
  
  const myDiv = document.getElementById(targetdiv);
  const rect = myDiv.getBoundingClientRect();
  const x = rect.x + 100;
  const y = rect.y + 20;
  
  div.style.top = y + `px`;
  div.style.left = x  + `px`;
  
}



// old function NOT USED 
function createTable() {
    for (var i = 0; i < num_rows; i++) {
    
    var newDiv = $('<div/>' , 
      { id: 'rowDiv' + i , 
        css: {width:'180%', 
              margin: '1%'
        }
      });
    $('#spreadsheet').append(newDiv);
    
    temp_list = generateRandomNumbers(48,0,9);
    
    for (var j = 0; j < temp_list.length; j++) {
      
      number_calc = ((i*j) + 1 ) % 10;
      anim_str =  number_calc + 's';
      
      var newDiv = $('<div/>', {
        id: 'number_cell_' + i + '_' + j,
        class: 'floating',
        text: temp_list[j],
        css: {
          margin: '1%'
          ,display: 'inline'
          ,animation: 'float 3s ease-in-out infinite'
          
          //,duration: anim_str
        }
      });
     $('#rowDiv' + i).append(newDiv);
     
    }
  } // end of row for loop
}