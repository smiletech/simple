const inputbtn = document.getElementById("input-btn");
const UlEl = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");
let leads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  Render(leads);
}

inputbtn.addEventListener("click", function () {
  leads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("leads", JSON.stringify(myLeads));
  Render(leads);
});

function Render(leads) {
  let leadsitem = "";

  for (let i = 0; i < leads.length; i++) {
    leadsitem += `
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>
    `;
  }
  UlEl.innerHTML = leadsitem;
  console.log("-----------");
}
