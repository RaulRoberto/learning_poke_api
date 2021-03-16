document.addEventListener("DOMContentLoaded",()=>{

    function searchPoke(pokemon){

        let url= "https://pokeapi.co/api/v2/pokemon/"+pokemon;

        axios.get(url)
            .then(response =>{
                console.log(response.data);
                showPoke(response.data);
            })              

    }

    function showPoke(pokemon){
        let info =`<div> <img src="${pokemon.sprites.front_default}"> </div>
                <div class="pokeSpecs"> 
                    <h1>${pokemon.id} - ${pokemon.name}</h1>
                    <h3>Type: ${pokemon.types.map(item=>item.type.name)}</h3>
                    <h3>Moves:  ${pokemon.moves.map(item=>item.move.name)}</h3>
                    <h3>Weight: ${pokemon.weight/10} Oz</h3>
                    <h3>Height: ${pokemon.height/10} ft</h3>
                </div>`
        document.querySelector("#resultado").innerHTML=info;

    }

    document.querySelector("#btnConsulta").addEventListener("click", function(){
        var nome=document.querySelector("#txtnomepoke").value;
        if(nome==""){
            alert("Null name/number");
        }
        else{
            searchPoke(nome);
        }

    });   
});