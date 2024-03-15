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
	
	//ADICIONAR E REMOVER CLASSE ACTIVE NOS LINKS
	
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
	
	if(window.scrollY > 100) {
		navbar.classList.add('reduzir');
	}


	window.addEventListener('scroll',function(){
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


	//MSG DO BTN-ZAP
	if(url == "inicio" || url == "sobre"){

		
		const btnZap = document.querySelector(".btn-zap")
		const textZap = document.querySelector(".text-zap")
		const imgZap = document.querySelector(".img-zap")
		const zapForm = document.querySelector("#zapForm")
		const btnCloseZap = document.querySelector('#btnCloseZap')

		btnCloseZap.addEventListener('click',()=>{
			zapForm.classList.remove("entrar")
			zapForm.classList.add("sair")
			setTimeout(()=>{zapForm.classList.add("d-none")},300)
		})

		btnZap.addEventListener("click", ()=>{
			zapForm.classList.add("entrar")
			zapForm.classList.remove("d-none")
		})
		
		function entrar(){
			if(textZap.classList.contains("entrar")){
				textZap.classList.add("d-block")
				textZap.classList.remove("d-none")
			} else {
				textZap.classList.remove("d-block")
				textZap.classList.add("d-none")
			}
		}
		
		if (window.matchMedia("(min-width:800px)").matches) {

			btnZap.addEventListener('mouseover',()=>{
				textZap.classList.add("entrar")
				if(textZap.classList.contains("sair")){
					textZap.classList.remove("sair")
				}
				imgZap.classList.remove("rise-shake")
				entrar()
			})

			btnZap.addEventListener('mouseout',()=>{
				if(textZap.classList.contains("entrar")){
					textZap.classList.remove("entrar")
				}
				textZap.classList.add("sair")
				imgZap.classList.add("rise-shake")
				setTimeout(entrar,300)
			})

		} else {

			imgZap.classList.remove("rise-shake")
			imgZap.classList.add("pulse-brilho")

			var timerId = () => {
				
				//Faz alguma coisa aqui!
				textZap.classList.add("entrar")
				if(textZap.classList.contains("sair")){
					textZap.classList.remove("sair")
				}
				imgZap.classList.remove("pulse-brilho")
				imgZap.classList.remove("rise-shake")
				entrar()

				//faz outra coisa (no caso, volta ao estado inicial)
				setTimeout(()=>{
					if(textZap.classList.contains("entrar")){
						textZap.classList.remove("entrar")
					}
					textZap.classList.add("sair")
					imgZap.classList.add("rise-shake")
					setTimeout(entrar,300)
				}, 6000) //tempo para fazer a outra coisa
				
			}

			setTimeout(()=>{
				setTimeout(()=>{ imgZap.classList.add("rise-shake") },6000)
				setInterval(timerId,12000)
			},30000)

			
			//tempo para iniciar o evento
			
			// setTimeout(clearInterval(timerId),6000)
		}
	}
	
//end DOMContentLoader	
})




