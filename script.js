//xml http request
let requist = new xmlhttrequest();
requist.open('get', 'https://reqres.in/api/unknown')
requist.addeventlistener('load', function()  {
   let response = this, responsetext;
   let responsejs = json.parse(response)
   console.log(responsejs);
})
requist.send();

let ul = document.createElement("ul");
JS.data.forEach((element) => {
  let li = document.createElement("li");
  li.textContent = `${element.color} ${element.name}`;
  ul.appendChild(li);
});
divUser.appendChild(ul);
;

request.addEventListener("error", function () {
let pEl = document.createElement("p");
pEl.innerText = "server error";
divUser.appendChild(p);
});

request.send();




