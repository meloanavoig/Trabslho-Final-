
var formulario = document.querySelector('#inputTexto')

var caixa = document.querySelector('#caixa')

var empresaNome = document.querySelector('#empresaNome')
var empresaEmail = document.querySelector('#empresaEmail')
var empresaFundação = document.querySelector('#empresaFundação')
var empresaTelefone = document.querySelector('#empresaTelefone')

var vetor = [];
var cont = -1;

var areadeCaixas = document.querySelector('#areadeCaixas')

var botaoLimpar = document.querySelector('#limparBtn')

botaoLimpar.addEventListener('click', function () {
    localStorage.clear()
    vetor = [];
    location.reload()
})


function x() {
    if(localStorage.getItem('lista') != null){
            vetor = JSON.parse(localStorage.getItem('lista'))
        
            for(i = 0; i < vetor.length; i++){
                let box = document.createElement('div')
            
                box.setAttribute('id', 'box')
        
                let nomeSalvo = document.createElement('p')
                let emailSalvo = document.createElement('p')
        
                nomeSalvo.innerHTML = vetor[i][0]
                emailSalvo.innerHTML = vetor[i][1]
        
                box.appendChild(nomeSalvo)
                box.appendChild(emailSalvo)
        
                areadeCaixas.appendChild(box)
        
        }
    }

}

x()


//

//

botao.addEventListener('click', function () {
    fetch(`https://api.cnpja.com.br/companies/${formulario.value}`, {
  "method": "GET",
  "headers": {
    "authorization": '0b8414ad-7e7e-4730-a8ae-99262278a090-bdc0ae66-1897-4f6e-a043-9ad886c81920'
  }
})
.then(response => {
  return response.json()
})
.then((data) =>{
    console.log(data)
    empresaNome.innerHTML = data.name
    empresaEmail.innerHTML = "Email: " + data.email
    empresaFundação.innerHTML = "Fundação: " + data.founded
    empresaTelefone.innerHTML = "Telefone: " + data.phone
    document.querySelector('#imagemId').setAttribute('src', data.maps.satellite)

    localStorage.setItem('lista', "")
    
    if(vetor.length < 3){
        vetor.push([data.name, data.email])
    
        localStorage.setItem('lista', JSON.stringify(vetor))

        vetor = JSON.parse(localStorage.getItem('lista'))

        if(localStorage.getItem('lista') != null){
            vetor = JSON.parse(localStorage.getItem('lista'))
            cont = cont + 1
    
                let box = document.createElement('div')
    
                box.setAttribute('id', 'box')
        
                let nomeSalvo = document.createElement('p')
                let emailSalvo = document.createElement('p')
    
                nomeSalvo.innerHTML = vetor[cont][0]
                emailSalvo.innerHTML = vetor[cont][1]

                let imagem = document.createElement('img');

                imagem.setAttribute('id', 'imagemId')
                imagem.src = 
    
                box.appendChild(nomeSalvo)
                box.appendChild(emailSalvo)
    
                areadeCaixas.appendChild(box)
                
    
        }
        else{
            vetor = []
        }
        

        
    }
    else{
        alert("Chegou ao limite")
    }
    

})
.then(()=>{
    caixa.style.display = "flex"
    document.querySelector('#voltarBtn').style.display = "inline"
    formulario.style.display = "none"
    botao.style.display = "none"
})

.catch(err => {
    console.log(err);
  });
  })
