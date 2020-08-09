import { Component } from "../core/component";

export class MainHeaderComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        const anchors = document.querySelectorAll('a[href*="#"]')
        anchors.forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()       
            const blockID = anchor.getAttribute('href').substr(1)      
            document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'end'
            })
        
            // window.scrollBy(0, -10)
        })
        })
    }
}