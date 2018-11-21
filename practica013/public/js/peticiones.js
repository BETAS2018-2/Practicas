



document.getElementById("btnEnviar").addEventListener("click", ()=>{

    let password = document.getElementById("password").value;

    axios.get('http://localhost:3000/get/comprobacion/'+password)
        .then(function (response) {
            // handle success
            console.log(response);
            document.getElementById("msj").textContent = response.data.msj;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});