import { Component } from "../core/component";

export class SmoothScrollingComponent extends Component{
	constructor(id){
			super(id)
	}
	init(){
		const anchors = document.querySelectorAll('a[href*="#"]')
		const animatecharacter = document.querySelectorAll('.animatecharacter')
		const scrollDown = document.querySelectorAll('.scrollDown')
		const scrollDownUp = document.querySelectorAll('.scrollDown__up')
		addID(scrollDown)
		addID(scrollDownUp)
		scrollDown.forEach(e=>{
			if(e.dataset.id > 0){
				e.querySelector('.character').style.display = 'none'
				e.disabled = true
			}
		})
		
		anchors.forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()
				this.classList.add('animatecharacter__active')
				const blockID = anchor.getAttribute('href').substr(1)
				const scrollIntoLocation =()=>{
					document.getElementById(blockID).scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					})
				}
				if(e.target.classList.contains('character')){
					if(animatecharacter || animatecharacter > 0){
						setTimeout(scrollIntoLocation, 1000)
						const id = this.parentElement.dataset.id
						const nextID = parseInt(id) + 1 
						setTimeout(()=>{animateCharacter(id, scrollDownUp)}, 500)
						setTimeout(()=>{showCharacter(nextID, scrollDown)}, 2500)
					}
				}
			})
		})
	}
}
const animateCharacter = (id, scrollDownUp) =>{
	scrollDownUp.forEach(item=>{
		if(id==item.dataset.id){
			item.classList.add('scrollDown__up_active')
		}
	})
}
const showCharacter = (nextID, scrollDown) =>{
	scrollDown[nextID].querySelector('.character').style.display = 'flex'
}
const addID = (variables)=>{
	for(let id = 0; id < variables.length; id++){
		variables[id].setAttribute('data-id', id)
	}
}