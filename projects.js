import {Backend} from "./backend.js";
const API = new Backend();
API.setBaseUrl("https://api.github.com/");
let html = "";
API.get("users/ArshD1230/repos").then(data => {
    data.forEach(repo => {
        html += `<tr>
        <td style="width: 25%;"><span class="blue">${repo.full_name}</span></td>
        <td>${repo.description}</td>
    </tr>`
    })
});
console.log(html);
const table = document.querySelector("#project-table");
table.insertAdjacentHTML("beforeend", html);