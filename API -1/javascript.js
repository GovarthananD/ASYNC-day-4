async function fetchBibleApi() {
  try {
    const response = await fetch(
      "https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10"
    );
    const data = await response.json();
    console.log(data);
    let values = "";

    data.verses.map((bible) => {
      values += `<div class="card">
                <h2>${bible.book_name}</h2>
                <h4>${bible.book_id}</h4>
                <h4>${bible.chapter}</h4>
                <h4>${bible.verse}</h4>
                <h4>${bible.text}</h4>
            </div>`;
    });
    document.getElementById("cards").innerHTML = values;
  } catch (error) {
    console.log(error);
  }
}

fetchBibleApi();
