function parseCsv() {
  let fileContent = '';
  const fileSelected = document.getElementById('input').files[0];
  Papa.parse(fileSelected, {
    download: true,
    header: true,
    // delimiter: '\t',  // not necessary
    skipEmptyLines: true,
    quoteChar: '',
    complete: results => {
      console.log(results.data);
      // printTable(results.data);
      fileContent = results.data;
    }
  });
  return fileContent;
};

let httpRequest;

function makeRequest() {
  httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  // httpRequest.open('POST', 'http://localhost:5000/parse');
  httpRequest.open('POST', 'http://temu.bsc.es:5000/parse');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
  httpRequest.send({ key1: 'value1', key2: 'value2' });

}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      // alert(httpRequest.responseText);
      alert(`Respose from the backend: ${httpRequest.responseText}`);
    } else {
      alert('There was a problem with the request.');
    }
  }
};

// function printTable(data) {
  // const template = {
  //   '<>': 'tr',
  //   'html': `
  //     <td>\${columnaA}</td>
  //     <td>\${columnaB}</td>
  //     <td>\${columnaC}</td>
  //   `
  // };
  // document.getElementById('table').innerHTML += `<tr>
  //     <th>columnaA</th>
  //     <th>columnaB</th>
  //     <th>columnaC</th>
  //   </tr>`;
  // document.getElementById('table').innerHTML += json2html.transform(data, template);

  // txt = ''
  // txt += "<table border='1'>"
  // for (obj in data) {
  //   txt += "<tr><td>" + data[obj].columnaA + "</td></tr>";
  // }
  // txt += "</table>"
  // document.getElementById("table").innerHTML = txt;
// };
