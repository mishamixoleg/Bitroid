document.addEventListener('DOMContentLoaded',function(){
  var json = {
    "data": [
        {
            "number": "13",
            "position": "GK",
            "name": "John"
        },
        {
            "number": "2",
            "position": "CB",
            "name": "Bill"
        },
        {
            "number": "26",
            "position": "CB",
            "name": "Nick"
        }
    ]
  };
  
  
  function objToTable(obj) {
    var data = obj.data;
    var output = '<table>';
    for (var i = 0; i < data.length; i++) {
        output += '<tr>';
        output += '<td>' + data[i].number + '</td>';
        output += '<td>' + data[i].position + '</td>';
        output += '<td>' + data[i].name + '</td>';
        output += '</tr>\n'; // added newline for console readability
    }
    output += '</table>';
    return output;
  }
  
  
  console.log(objToTable(json));
});

