const inputs = document.querySelectorAll("input");
const grades = document.querySelectorAll(".grade");

const generate = function (handler, event) {
  grades[0].innerText = `Grade – ${inputs[0].value}`;
  grades[1].innerText = `कक्षा – ${inputs[0].value}`;
  let x = event.target.previousElementSibling.value.toUpperCase();
  if (!x) return;
  x = x.split(/,|\n/);
  const y = x
    .map((el) => {
      if (!el) return false;
      return el.trim();
    })
    .filter((el) => el);

  const element = document.querySelector(`.table-data${handler ? 0 : 1}`);
  element.innerHTML = "";

  const dataLength = Math.ceil(y.length / 2);
  let html = `<table>
              <tr>
                <th colspan="2">${handler ? "Week" : "सप्ताह"} #${
    inputs[1].value
  } (${inputs[2].value})</th>
              </tr>`;
  for (let i = 0; i < dataLength; i++) {
    html += `<tr${i % 2 === 0 ? ' class="highlight"' : ""}>
              <td>${y[i]}</td>
              <td>${y[i + dataLength] ? y[i + dataLength] : ""}</td>
            </tr$>`;
  }
  html += `</table>`;
  element.innerHTML = html;
};