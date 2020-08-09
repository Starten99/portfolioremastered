import { Component } from "../core/component";

export class HeaderComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
       const menu=this.$el.querySelector('.navbar__menu')
       const btnClose=this.$el.querySelector('.navbar__close')
       const btnOpen=this.$el.querySelector('#open-navbar__menu')
       btnOpen.addEventListener('click', openMenu.bind(this, menu, btnOpen, btnClose))
       btnClose.addEventListener('click', closeMenu.bind(this, menu, btnOpen, btnClose))
    }
}
function openMenu(menu, btnOpen, btnClose) {
    menu.classList.add('navbar__menu-active')
    btnClose.classList.add('navbar__close-active')
    btnOpen.classList.add('navbar__btn-bars-delete')
}
function closeMenu(menu, btnOpen, btnClose) {
    menu.classList.remove('navbar__menu-active')
    btnClose.classList.remove('navbar__close-active')
    btnOpen.classList.remove('navbar__btn-bars-delete')
}