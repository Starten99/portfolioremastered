import { Component } from "../core/component";

export class HeaderComponent extends Component{
	constructor(id){
		super(id)
	}
	init(){
		if(this.$el){
			const menu = this.$el.querySelector('.menu')
			const header = document.querySelector('header')
			const menuList = menu.querySelector('.menu__wrapper')
			const btnClose = menu.querySelector('.menu__close')
			const btnBars = menu.querySelector('.menu__btn-bars')
			const items = menu.querySelectorAll('.menu__item a')
			const body = document.querySelector('body')
			if(menu){
				btnBars.addEventListener('click', openMenu.bind(this, menuList, btnBars, btnClose, body))
				btnClose.addEventListener('click', closeMenu.bind(this, menuList, btnBars, btnClose, body))
				let scrollPrev = 0
				window.addEventListener('scroll', function() {
					let scrolled = window.pageYOffset
					if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
						scrolled = document.documentElement.pageYOffset
					}
					if ( scrolled > 100 && scrolled > scrollPrev ) {
						header.classList.add('out')
					}
					else {
						header.classList.remove('out');
					}
					scrollPrev = scrolled;
				});
				items.forEach(item=>{
					item.addEventListener('click', (event)=>{scrollIntoLocation(event, menuList, btnBars, btnClose, body)})
				})
			}
		}
		
	}
}
const active = ($block) => {
	const active = $block.classList[0]+'_active'
	$block.classList.toggle(active)
}

const openMenu = (menuList, btnBars, btnClose, body) => {
	active(menuList)
	active(btnClose)
	body.style.overflow='hidden'
	btnBars.classList.add('menu__btn-bars_delete')
}

const closeMenu = (menuList, btnBars, btnClose, body) => {
	active(menuList)
	active(btnClose)
	body.style.overflow='auto'
	btnBars.classList.remove('menu__btn-bars_delete')
}

const scrollIntoLocation =(event, menuList, btnBars, btnClose, body)=>{
	const link = event.target
	const blockID = link.getAttribute('href').substr(1)
	const menuListActive = document.querySelector(`.${menuList.classList[0]}_active`)
	const btnCloseActive = document.querySelector(`.${btnClose.classList[0]}_active`)
	if(document.getElementById(blockID)){
		event.preventDefault()
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}
	if(menuListActive || btnCloseActive){
		menuList.classList.remove(menuList.classList[0]+'_active')
		btnClose.classList.remove(btnClose.classList[0]+'_active')
		btnBars.classList.remove('menu__btn-bars_delete')
		body.style.overflow='auto'
	}

}