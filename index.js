//Create an intial array of freelancers
const freelancers = [
    {name: "Alice", occupation:"Writer", price: 30},
    {name: "Bob", occupation:"Teacher", price: 50},
    {name: "Carol", occupation:"Programmer", price: 70},
];
//Create a function to caculate average price
const sumPrice = freelancers.reduce(
    (pay,freelancers) => pay + freelancers.price, 0);

let averagePrice = sumPrice / freelancers.length

console.log(averagePrice);

//create context on webpage (CreateElement -> .textContent -> appendchild)

const body = document.body;
const ff = document.createElement("h1");
const ap = document.createElement("h3");
const af = document.createElement("h2");
const labels = document.createElement("h2");
const freelancer1 = document.createElement("h3");
const freelancer2 = document.createElement("h3");
const freelancer3 = document.createElement("h3");




ff.textContent = "Freelancer Forum ";
ap.textContent = `The average starting price is $ ${averagePrice}`
af.textContent = "Available Freelancers:"

freelancer1.textContent = "Alice - Writer $30"
freelancer2.textContent = "Bob - Teacher $50"
freelancer3.textContent = "Carol - Programmer $70"


body.appendChild(ff);
body.appendChild(ap);
body.appendChild(af);
body.appendChild(freelancer1);
body.appendChild(freelancer2);
body.appendChild(freelancer3);


ff.setAttribute("style", " color:white; background: #885A89; padding: 5px; margin-left: 400px; margin-right: 400px; text-align: center");
ap.setAttribute("style", " color:white; background: #8AA8A1; padding: px; margin-left: 400px; margin-right: 400px; text-align: center");
af.setAttribute("style", " color:white; background: #885A89; padding: 0px; margin-left: 35px; text-align: center");
freelancer1.setAttribute("style", "margin:auto; width:50%; text-align:center")
freelancer2.setAttribute("style", "margin:auto; width:50%; text-align:center")
freelancer3.setAttribute("style", "margin:auto; width:50%; text-align:center")


