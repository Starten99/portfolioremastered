
import { Component } from "../core/component";

export class SliderComponent extends Component{
	constructor(id, parameters){
		super(id, parameters)
	}
	init(){
		const slider = this.$el.querySelector('.slider')
		const btnNext = slider.querySelector('.btn-next')
		const btnPrev = slider.querySelector('.btn-prev')
		const slides = slider.querySelectorAll('.slider__item')
		
		let slidesPerView = 1
		const breakpoints = this.parameters.breakpoints
		const findSlidesPerView=(breakpoints)=>{
			if (document.documentElement.clientWidth >= 769) {
				slidesPerView = breakpoints["XXL"].slidesPerView
				console.log(slidesPerView)
			}
			else if(document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth >= 481 ){
				slidesPerView = breakpoints["XL"].slidesPerView
		
			}
			else if(document.documentElement.clientWidth <= 480){
				slidesPerView = breakpoints["L"].slidesPerView
			}
		}
		findSlidesPerView(breakpoints)
		window.addEventListener('load', () => {findSlidesPerView(breakpoints)})	
		window.addEventListener('resize', () => {findSlidesPerView(breakpoints)})
		console.log(slidesPerView)
		createID.call(this, slides, slidesPerView)
		let activeSlide = this.$el.querySelectorAll(`.slider__item[data-id="1"]`)
		activeSlide.forEach(e=>{
			const active = e.classList[0]+'_active'
			e.classList.toggle(active)
		})


		const renderPoint = slider.querySelector('.slider__navigation')
		// renderSwitchPoint(renderPoint, slides)
		renderSwitchPoint.call(this, renderPoint, slides, slidesPerView)

		//Navigation
		
		const btnPoints=this.$el.querySelectorAll('.slider__btn-point')
		const btnNavigation=this.$el.querySelector('.slider__navigation')
		btnNext.addEventListener('click', switchNextOrPrevSlide.bind(this, slides, true, btnPoints, slidesPerView))
		btnPrev.addEventListener('click', switchNextOrPrevSlide.bind(this, slides, false, btnPoints, slidesPerView)) 
		btnNavigation.addEventListener('click', tapBtnPoints.bind(this))
		//Autoplay
		launchAutoplay.call(this, slides, 1, btnPoints, slidesPerView)

	}
}



const active =($block)=> {
	$block.forEach(e=>{
		const active = e.classList[0]+'_active'
		e.classList.toggle(active)
	})
}

// function findSlidesPerView(){
// 	let slidesPerView
// 	if(slidesPerView){
// 		slidesPerView = slidesPerView
// 	}

// 	return slidesPerView
// 	// if(breakpoints){
// 	// 	if (document.documentElement.clientWidth >= 769) {
// 	// 		return slidesPerView = breakpoints["XXL"].slidesPerView
// 	// 	}
// 	// 	else if(document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth >= 481 ){
// 	// 		return slidesPerView = breakpoints["XL"].slidesPerView
// 	// 	}
// 	// 	else if(document.documentElement.clientWidth <= 480){
// 	// 		return slidesPerView = breakpoints["L"].slidesPerView
// 	// 	}
// 	// }
// }

//важное
function renderSwitchPoint(renderPoint, slides, slidesPerView){
	for(let count=1;count<=Math.ceil(slides.length/slidesPerView); count++){
			if(count==1){
					renderPoint.insertAdjacentHTML('afterbegin', `<button class="slider__btn-point slider__btn-point_active" data-id="${count}"></button>`)
			}
			else{
					renderPoint.insertAdjacentHTML('beforeend', `<button class="slider__btn-point" data-id="${count}"></button>`)
			}   
	}
	
}

let intervalID

function launchAutoplay (slides, parseIdSlide, btnPoints, slidesPerView){
	 intervalID = setInterval (autoplay.bind(this, slides, parseIdSlide, btnPoints, slidesPerView), this.parameters.startAutoplayDelay)
}
//важное
function createID(slides, slidesPerView){
	const arraySlides = Array.prototype.slice.call(slides)
	let sharedArray = []
	for (let numberSlides = 0; numberSlides < arraySlides.length; numberSlides += slidesPerView) {
		sharedArray.push(arraySlides.slice(numberSlides, numberSlides + slidesPerView))
	}
	for(let id = 0; id < sharedArray.length; id++){
		sharedArray[id].forEach(e=>{
			e.setAttribute('data-id', id+1)
		}) 
	}
}

function autoplay (slides, parseIdSlide, btnPoints, slidesPerView){
	if(this.parameters.autoplay){
		slides.forEach(slide=>{
			if(slide.classList.contains(slide.classList[0]+'_active')){
				slide.classList.remove(slide.classList[0]+'_active')
				if(slide.dataset.id<slides.length/slidesPerView){
					parseIdSlide=parseInt(slide.dataset.id)+1
				}
				else{
					parseIdSlide = 1
				}
			}
		})
		btnPoints.forEach(point=>{
			if(point.classList.contains(point.classList[0]+'_active')){
				point.classList.remove(point.classList[0]+'_active')
			}
		})
		let activeSlide = this.$el.querySelectorAll(`.slider__item[data-id="${parseIdSlide}"]`)
		active(activeSlide)
		let activePoint = this.$el.querySelectorAll(`.slider__btn-point[data-id="${parseIdSlide}"]`)
		active(activePoint)
	}
}

function restartAutoplay(slides, parseIdSlide, btnPoints, slidesPerView){
	clearInterval(intervalID)
	intervalID = setInterval (autoplay.bind(this, slides, parseIdSlide, btnPoints, slidesPerView), this.parameters.startAutoplayDelay)
}

//главная фун-я
function	switchNextOrPrevSlide(slides, nextorprev, btnPoints, slidesPerView){
	let parseIdSlide = 1;	 
	slides.forEach(slide=>{
		if(slide.classList.contains(slide.classList[0]+'_active')){
			slide.classList.remove(slide.classList[0]+'_active')
			parseIdSlide=parseInt(slide.dataset.id)+(nextorprev?1:-1)
		}
	})
	let activeSlide = this.$el.querySelectorAll(`.slider__item[data-id="${parseIdSlide}"]`)
	if(nextorprev?(parseIdSlide <= Math.ceil(slides.length/slidesPerView))
	:(parseIdSlide <= Math.ceil(slides.length/slidesPerView)&&parseIdSlide > 0)){
		active(activeSlide)
		restartAutoplay.call(this, slides, parseIdSlide, btnPoints, slidesPerView)
	}
	else{
		this.parameters.infiniteSwipeSlides?
		(parseIdSlide = nextorprev?1:Math.ceil(slides.length/slidesPerView)):
		(parseIdSlide = nextorprev?Math.ceil(slides.length/slidesPerView):1)
		activeSlide = this.$el.querySelectorAll(`.slider__item[data-id="${parseIdSlide}"]`)
		active(activeSlide)
		restartAutoplay.call(this, slides, parseIdSlide, btnPoints, slidesPerView)
	}
	selectSwitchPoint.call(this, nextorprev, btnPoints) 
}

function selectSwitchPoint(nextorprev, btnPoints){
	let parseIdPoint=1;
	btnPoints.forEach(point=>{
			if(point.classList.contains('slider__btn-point_active')){
					point.classList.remove('slider__btn-point_active')
					parseIdPoint=parseInt(point.dataset.id)+(nextorprev?1:-1) 
			}
	})
	let activePoint = this.$el.querySelector(`.slider__btn-point[data-id="${parseIdPoint}"]`)
	if(nextorprev?(parseIdPoint<=btnPoints.length)
			:(parseIdPoint<=btnPoints.length&&parseIdPoint>0)){
			activePoint.classList.add('slider__btn-point_active')
	}
	else{
		this.parameters.infiniteSwipeSlides?
		(parseIdPoint=nextorprev?1:btnPoints.length):
		(parseIdPoint=nextorprev?btnPoints.length:1)
		activePoint = this.$el.querySelector(`.slider__btn-point[data-id="${parseIdPoint}"]`)
		activePoint.classList.add('slider__btn-point_active')
	}
}


function tapBtnPoints(event){
	const slider = this.$el.querySelector('.slider')
	const slides = slider.querySelectorAll('.slider__item')
	const btnPoints=this.$el.querySelectorAll('.slider__btn-point')
	let slidesPerView = slidesPerView
	if(event.target.classList.contains('slider__btn-point')){
			btnPoints.forEach(point=>{
					slides.forEach(slide=>{    
							slide.classList.remove(slide.classList[0]+'_active')
							point.classList.remove('slider__btn-point_active')      
							if(point.classList.contains('slider__btn-point_active')){
									point.classList.remove('slider__btn-point_active') 
									slide.classList.remove(slide.classList[0]+'_active')  
							}
							if(event.target.dataset.id===slide.dataset.id){
									event.target.classList.add('slider__btn-point_active')
									slide.classList.add(slide.classList[0]+'_active') 
									restartAutoplay.call(this, slides, slide.dataset.id, btnPoints, slidesPerView)
							}
					})    
			})
	}
}








