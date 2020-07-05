const text = document.getElementById("input");
const submit = document.getElementById("submit");
const targets = document.getElementById("targets");
const dropdown = document.getElementById("dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "722a32f0",
      s: text.value,
    },
  });
  if (response.data.Error){
     return [];
  }
  const movies = response.data.Search;
  for (let movie = 0; movie < movies.length ; movie++) {
    const div = document.createElement("div");
    div.setAttribute("id" , "newDiv")
    div.innerHTML = `<img src="${movies[movie].Poster}"/>
    <h1>${movies[movie].Title}</h1>`;
    text.value = text.value;
    if(movies[movie].Poster === "N/A"){
      div.innerHTML = `<img src="${movies[0].Poster}"/>
      <h1>${movies[movie].Title}</h1>`;
    }
    dropdownMenu.appendChild(div); 
    dropdownMenu.style.border = " 1px solid #aba7a7" ;
    div.addEventListener("click",function(){
      div.innerHTML = `<img src="${movies[movie].Poster}"/>
      <div>
      <h1>${movies[movie].Title}</h1>
      <h2>The film was released on ${movies[movie].Year}</h2>
      <p>The id of film is ${movies[movie].imdbID}</p>
      </div>`;
      if(movies[movie].Poster === "N/A"){
        div.innerHTML = `<img src="${movies[0].Poster}"/>
        <div>
        <h1>${movies[movie].Title}</h1>
        <h2>The film was released on ${movies[movie].Year}</h2>
        <p>The id of film is ${movies[movie].imdbID}</p>
        </div>`;
      }
      targets.appendChild(div);
      text.value = movies[movie].Title    
      dropdownMenu.remove(div) ;
    })
  }

};
submit.addEventListener("click", () => {
  fetchData();
});
