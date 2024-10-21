import { series } from "./data";

function displaySeries(): void {
  const tbody = document.getElementById("series-table-body")!;
  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tbody.appendChild(row);
  });
}

function displayAverageSeasons(): void {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  const average = totalSeasons / series.length;
  const p = document.getElementById("average-seasons")!;
  p.innerText = `Promedio de temporadas: ${average.toFixed(2)}`;
}

// Ejecutar funciones
displaySeries();
displayAverageSeasons();
