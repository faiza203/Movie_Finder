const text = document.getElementById("input");
const submit = document.getElementById("submit");
let search;
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "722a32f0",
      s : text.value,
    },
  });
  console.log(response.data);
};
submit.addEventListener("click" , () =>{
    fetchData()
})
