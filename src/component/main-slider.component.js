import { Component } from "../core/component";

export class SliderComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        const btnNext=this.$el.querySelector('.btn-next')
        const btnPrev=this.$el.querySelector('.btn-prev')
        const slides=this.$el.querySelectorAll('.clider__content-item')
        const renderPoint=this.$el.querySelector('.clider__navigation')
        renderSwitchPoint(renderPoint, slides)
        const btnPoints=this.$el.querySelectorAll('.clider__btn-point')
        const btnNavigation=this.$el.querySelector('.clider__navigation')
        btnNext.addEventListener('click', switchNextOrPrevSlide.bind(this, slides, true,btnPoints))
        btnPrev.addEventListener('click', switchNextOrPrevSlide.bind(this, slides, false,btnPoints)) 
        btnNavigation.addEventListener('click', tapBtnPoints.bind(this))
    }
}
function renderSwitchPoint(renderPoint, slides){
    for(let count=1;count<=slides.length;count++){
        if(count==1){
            renderPoint.insertAdjacentHTML('afterbegin', `<button class="clider__btn-point clider__btn-point_active" data-id="${count}"></button>`)
        }
        else{
            renderPoint.insertAdjacentHTML('beforeend', `<button class="clider__btn-point" data-id="${count}"></button>`)
        }   
    }
    
}

function  switchNextOrPrevSlide(slides, nextorprev, btnPoints){
    let parseIdSlide=1;   
    slides.forEach(slide=>{      
            if(slide.classList.contains('clider__content-item_active')){         
                slide.classList.remove('clider__content-item_active')
                parseIdSlide=parseInt(slide.dataset.id)+(nextorprev?1:-1)           
            }  

    })
    let activeSlide = document.querySelector(`.clider__content-item[data-id="${parseIdSlide}"]`)
    if(nextorprev?(parseIdSlide<=slides.length)
    :(parseIdSlide<=slides.length&&parseIdSlide>0)){
        activeSlide.classList.add('clider__content-item_active')
    }
    else{
        parseIdSlide=nextorprev?slides.length:1
        activeSlide = document.querySelector(`.clider__content-item[data-id="${parseIdSlide}"]`)
        activeSlide.classList.add('clider__content-item_active')
    }
    selectSwitchPoint(nextorprev, btnPoints)   
}

function selectSwitchPoint(nextorprev, btnPoints){
    let parseIdPoint=1;
    btnPoints.forEach(point=>{
        if(point.classList.contains('clider__btn-point_active')){
            point.classList.remove('clider__btn-point_active')
            parseIdPoint=parseInt(point.dataset.id)+(nextorprev?1:-1) 
        }
    })
    let activePoint = document.querySelector(`.clider__btn-point[data-id="${parseIdPoint}"]`)
    if(nextorprev?(parseIdPoint<=btnPoints.length)
        :(parseIdPoint<=btnPoints.length&&parseIdPoint>0)){
        activePoint.classList.add('clider__btn-point_active')
    }
    else{
        parseIdPoint=nextorprev?btnPoints.length:1
        activePoint = document.querySelector(`.clider__btn-point[data-id="${parseIdPoint}"]`)
        activePoint.classList.add('clider__btn-point_active')
    }
}

function tapBtnPoints(event){
    const slides=this.$el.querySelectorAll('.clider__content-item')
    const btnPoints=this.$el.querySelectorAll('.clider__btn-point')
    if(event.target.classList.contains('clider__btn-point')){
        btnPoints.forEach(point=>{
            slides.forEach(slide=>{    
                slide.classList.remove('clider__content-item_active')     
                if(point.classList.contains('clider__btn-point_active')){
                    point.classList.remove('clider__btn-point_active') 
                    slide.classList.remove('clider__content-item_active')   
                }
                if(event.target.dataset.id===slide.dataset.id){
                    event.target.classList.add('clider__btn-point_active')
                    slide.classList.add('clider__content-item_active') 
                }
            })    
        })
    }
}