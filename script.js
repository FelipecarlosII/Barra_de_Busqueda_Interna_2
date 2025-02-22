let data = [
    "Fideos",
    "Asado",
    "Milanesa",
    "Ñoquis",
    "Tarta de verdura",
    "Salmon rosado",
    "Arroz con pollo",
    "Canelones",
    "Pollo al horno"

];

function buscar(){

    let query = document.getElementById("buscar").value;

    console.log(query);

    if(query.trim() === ""){
        return;
    }

    let results = [];

    for(let i = 0; i < data.length; i++){
        if(data[i].toLocaleLowerCase().includes(query.toLocaleLowerCase())){
            results.push(data[i]);

        }
    }

    document.getElementById("results").innerHTML = "";

    if(results.length > 0){
        for (let i = 0; i < results.length; i++){
            let li = document.createElement("li");
            li.textContent = results[i];
            document.getElementById("results").appendChild(li);
        }
    }
    else{
        let li = document.createElement("li");
        li.textContent = "No se encontro la comida llamada: " + query;
        document.getElementById("results").appendChild(li);
    }

}