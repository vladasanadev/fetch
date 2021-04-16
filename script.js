const url = "https://ajax.test-danit.com/api/swapi/films";

setTimeout(() => {
  fetch(url)
    .then((films) => films.json())
    .then((res) => {
      document.getElementById("loader").remove();
      console.log(res);
      res.forEach((el) => {
        console.log(el);
        const title = document.createElement("h2");
        const crawl = document.createElement("span");

        title.innerHTML = `${el.episodeId} ${el.name}`;
        crawl.innerHTML = `${el.openingCrawl}`;
        document.body.append(title, crawl);
        el.characters.forEach((link) => {
          fetch(link)
            .then((result) => result.json())
            .then((person) => {
              title.insertAdjacentHTML("beforeend", `<p>${person.name}</p>`);
              console.log(person.name);
            });
        });
      });
    });
}, 1000);
