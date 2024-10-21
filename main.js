"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
function displaySeries() {
    var tbody = document.getElementById("series-table-body");
    data_1.series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tbody.appendChild(row);
    });
}
function displayAverageSeasons() {
    var totalSeasons = data_1.series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var average = totalSeasons / data_1.series.length;
    var p = document.getElementById("average-seasons");
    p.innerText = "Promedio de temporadas: ".concat(average.toFixed(2));
}
// Ejecutar funciones
displaySeries();
displayAverageSeasons();
