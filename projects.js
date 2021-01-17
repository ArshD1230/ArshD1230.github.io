import {Backend} from "./backend.js";
const API = new Backend();
API.setBaseUrl("https://api.github.com/");
let html = "";
const table = document.querySelector("#project-table");
API.get("users/ArshD1230/repos").then(data => {
    data.forEach(repo => {
        if (repo.name != "first-contributions" && repo.name != "ArshD1230.github.io") {
          html += `<tr>
          <td style="width: 25%;"><span class="blue"><a href="${repo.html_url}" target="_blank">${repo.name}</a></span></td>
          <td>${repo.description}</td>
          </tr>`;
        }
    })
    table.innerHTML = html;
    console.log(html);
});