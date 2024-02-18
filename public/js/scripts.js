//ANIMAÇÔES
const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaScroll(){
	const topoPaginaNaJanela=window.pageYOffset+((window.innerHeight*3)/3);
	elementos.forEach(function(elemento){
		if(topoPaginaNaJanela > elemento.offsetTop){
			elemento.classList.add(animacaoClass);
		}else{
			elemento.classList.remove(animacaoClass);
		}
	});
}

if(elementos.length){
	window.addEventListener('DOMContentLoaded', function(){
		animaScroll()
	})
	window.addEventListener('scroll',function(){
		animaScroll()

	})
}


//TODA VEZ QUE A PÁGINA FOR CARREGADA
window.addEventListener("DOMContentLoaded", ()=>{
	
	
	
	//ADICIONA E REMOVE CLASSE ACTIVE NOS LINKS
	
	//url recebe valor depois da barra (se vier vazia recebe a palavra inicio)
	let url = window.location.pathname.replace(/\//g,'')
	if(!url){
		url = 'inicio'
	}
	
	//ul do nav é selecionada
	const ul = document.getElementById('pills-tab')

	//array de elementos li da ul são selecionados
	const lis = ul.children
	
	//lis é iterado com for
	for(let li of lis){
		
		//tag A é acessada
		let item = li.children[0]

		//preparei os ids com os mesmos nomes das urls, se url for igual ao id, adiciona a classe active, se não, remove
		if(url == item.id ){
			item.classList.add('active')
		} else{
			item.classList.remove('active')
		}
		
	}

	//NAVBAR 
	const navbar = document.querySelector('.navbar')
	if(document.body.offsetTop > 100) {
		navbar.classList.add('reduzir');
	}


	window.addEventListener('scroll',function(){
		console.log(window.scrollY)
		if(window.scrollY > 50){
			navbar.classList.add('reduzir');
		} else {
			navbar.classList.remove('reduzir');
		}
	});
	
	//NAVBAR MOBILE
	const btnNavbarToggle = document.querySelector('#navbar-toggler')

	btnNavbarToggle.addEventListener('click', function(){
		
		if(btnNavbarToggle.classList.contains('collapsed')){
			navbar.classList.remove('show')
		} else {
			navbar.classList.add('show')
		}
		

	})
	
	
	//BOTÃO BEM-VINDO
	if(url == "inicio"){
		const bemVindo = document.getElementById('btnBemVindo')
		
		bemVindo.addEventListener("click", (event)=>{
			event.preventDefault()
			window.scrollTo(0, (document.getElementById('section1').offsetTop - 70))
		})
	}



	//BOTÃO MINHA HISTÓRIA
	if(url == "sobre"){
		const minhaHistoria = document.getElementById('btnMinhaHistoria')
		
		minhaHistoria.addEventListener("click", (event)=>{
			event.preventDefault()
			window.scrollTo(0, (document.getElementById('minhaHistoria').offsetTop - 70))
		})
	}

	

//end DOMContentLoader	
})




