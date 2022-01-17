function loadPeople() {
  var xhttp = new XMLHttpRequest()
  var $table = document.getElementById('myTable')
  var $row = null
  var $cell = null
  var $cell2 = null
  var $cell3 = null
  var $text = null
  var $text2 = null
  var $text3 = null
  var response = []
  $table.style.margin = '0 auto'
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText)
      response.forEach((element, index) => {
        $row = $table.insertRow(-1)
        $cell = $row.insertCell(-1)
        $cell2 = $row.insertCell(-1)
        $cell3 = $row.insertCell(0)
        $text = document.createTextNode(element.name)
        $text2 = document.createTextNode(element.address)
        $text3 = document.createTextNode(index + 1)
        $cell.appendChild($text)
        $cell2.appendChild($text2)
        $cell3.appendChild($text3)
      })
      $table.style.border = '1px solid black'
      for (let index = 0; index < $table.rows.length; index++) {
        const element = $table.rows[index];
        if (index%2 != 0) {
          element.style.backgroundColor = 'lightgray'
        }
        for (let j = 0; j < element.cells.length; j++) {
          const element2 = element.cells[j];
          element2.style.border = '1px solid black'
        }
      }
    }
  }
  xhttp.open('GET', 'http://www.json-generator.com/api/json/get/cfJlZDQkeq?indent=2', true)
  xhttp.send()
}
loadPeople()
