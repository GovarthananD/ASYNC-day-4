async function getUrl() {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"
    );
    const data = await response.json();
    console.log(data);
    let values = "";

    data.map((site) => {
      values += `<div class="card">
                <img src=${site.url} alt="pic" class="image"/>
                <h5>${site.id}</h5>
                <p>${site.width}</p>
                <p>${site.height}</p>
            </div>`;
    });
    document.getElementById("cards").innerHTML = values;
  } catch (error) {
    console.log(error);
  }
}

getUrl();
