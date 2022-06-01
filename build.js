   fetch("https://swapi.dev/api/people/")
.then((response) => response.json())
.then((response) => {
    let dataList = response.results;
    // console.log(dataList);
   
    // document.querySelector = ("sarch-bar").addEventListener("input" , filterList)
    
    for(i=0;i<dataList.length;i++){
        const main = document.querySelector("#my_div");
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const a = document.createElement("a");

        // const output = document.querySelector(".output");
        // const search = document.querySelector("search-input");
    
    //    function filter(e) {
    //    let char = '';
    //    const outputChar  = response.filter(dataList[i]=> dataList[i].toLowerCase().includes(e.target.value.toLowerCase()))

    //    console.log(outputChar);

        
        // let img = document.createElement()
        main.appendChild(div);
        div.appendChild(h3);
        div.appendChild(ul)
        ul.appendChild(li);
        ul.appendChild(a);
        
        // document.getElementById("list").innerHTML = (li);
        div.setAttribute("class" , dataList[i].name);
        h3.textContent = dataList[i].name;
        li.textContent = ` das Geburtsjahr :  ${dataList[i].birth_year} `
        li.style.listStyle = "none";
        a.innerHTML = "Filme";
        a.href = dataList[i].films[0];
        // how to get species?why code isn't working?(zugriff auf die Datei nicht möglich)
        main.style.backgroundImage = "url('https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755')";
        a.style.textDecoration = " none";
        div.style.margin ="2vh"
        h3.style.color = "white"
        li.style.color = "white"
        a.style.color = " white"
        main.style.justifyContent = "center"
        main.style.alignItems = "center"

      

    // htmlString = charactersList.map (person => 
    //     return
    //  code the other day gave an error output (.map is not a function)
    





    };
const searchInput = document.getElementById("search");
const list = document.querySelectorAll("div.h3");
console.log(list);
// searchInput.addEventListener("keyup", function() ) 
    


//     console.log(loadList);
}
    


 );

