let xml = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let parser = new DOMParser();
const xmlDOM = parser.parseFromString(xml, 'text/xml');
const xmlName = xmlDOM.querySelectorAll('name'); 
const age = xmlDOM.querySelectorAll('age');
const prof = xmlDOM.querySelectorAll('prof');
 const jsObj = {
   list:[
    {
      name: xmlName[0].textContent.trim().replace('\n     ', ''), 
      age: age[0].textContent, 
      prof: prof[0].textContent, 
      lang: xmlDOM.querySelectorAll('name')[0].getAttribute('lang')
    },
    {
      name: xmlName[1].textContent.trim().replace('\n     ', ''), 
      age: age[1].textContent, 
      prof: prof[1].textContent, 
      lang: xmlDOM.querySelectorAll('name')[1].getAttribute('lang')
    }

  ]
};

 
console.log(jsObj);
