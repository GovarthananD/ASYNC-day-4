async function facebookApi() {
  try {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    const data = await response.json();
    console.log(data);
    let values = "";

    data.map((book) => {
      values += `<div class="card">
                  <h2>${book.name}</h2>
                  <h4>${book.category}</h4>
                  <h4>${book.group}</h4>
              </div>`;
    });
    document.getElementById("cards").innerHTML = values;
  } catch (error) {
    console.log(error);
  }
}

facebookApi();
