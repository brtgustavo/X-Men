
/*
1 - let personagens = document.querySelectorAll('.personagem');
Aqui, a função querySelectorAll é utilizada para selecionar todos os elementos com a classe CSS chamada "personagem". 
Esses elementos serão armazenados em uma variável chamada personagens, que se tornará uma coleção de elementos.

2 -personagens.forEach(personagem => { ... })
Em seguida, é chamado o método forEach na coleção personagens, que permite percorrer cada elemento individualmente.

3 -personagem.addEventListener('mouseenter', () => { ... })
Para cada elemento da coleção personagens, é adicionado um ouvinte de evento para o evento 'mouseenter' 
(quando o cursor do mouse entra no elemento). Quando esse evento ocorrer, a função de retorno de chamada será executada.

4 -let personagemSelecionado = document.querySelector('.selecionado');
Dentro da função de retorno de chamada, a função querySelector é utilizada para encontrar o elemento com a classe CSS "selecionado" 
e armazená-lo na variável personagemSelecionado. A função querySelector retorna apenas o primeiro elemento 
que corresponde ao seletor especificado.

5 -personagemSelecionado.classList.remove('selecionado');
Em seguida, é removida a classe CSS "selecionado" do elemento armazenado em personagemSelecionado. 
A propriedade classList permite manipular as classes de um elemento HTML, e o método remove é usado para remover uma classe específica.

6 -personagem.classList.add('selecionado');
Por fim, a classe CSS "selecionado" é adicionada ao elemento atual (personagem) 
que disparou o evento 'mouseenter'. Isso destaca visualmente o elemento selecionado.

*/
let personagens = document.querySelectorAll('.personagem');
personagens.forEach(personagem => {                                
    personagem.addEventListener('click', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:40, behavior:'smooth'})
        }

        let personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        let imagemPersonagemGrande = document.querySelector('.personagem-grande');
        let idPersonagem = personagem.attributes.id.value ;
        
        imagemPersonagemGrande.src = `./x-men/src/imagens/card-${idPersonagem}.png`;
        
        let nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerHTML = idPersonagem;

        let descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})
