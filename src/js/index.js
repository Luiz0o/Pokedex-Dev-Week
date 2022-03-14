/*
quando clicar no pokemon listagem temos que esconder o catao do podemon aberto e mostrar o cartão correspondente ao que foi selecionado a listagem

pra isso vamos precisar trabalhar com dois elementos
1- listagem
2- catão do pokemon

precisamos criar duas variaveis JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listage de pokemons 

- remover a classe aberto so do cartão que esta aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/


const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard =  document.querySelectorAll('.cartao-pokemon')
 

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        console.log(pokemon)

const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

const idPokemonSelecionado = pokemon.attributes.id.value
const iDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
const cartaoPokemonParaAbrir = document.getElementById(iDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')


const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
    

const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})