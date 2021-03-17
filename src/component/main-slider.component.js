import { Component } from "../core/component";

export class SliderComponent extends Component{
	constructor(id, parameters){
		super(id, parameters)
	}
	init(){
		if(this.$el){
			const slider = this.$el.querySelector('.slider')
			const breakpoints = this.parameters.breakpoints
			let slidesPerView = 1
			const infiniteSwipe = this.parameters.infiniteSwipeSlides
			// const autoplaySlide = this.parameters.autoplay
			// const delayAutoplay = this.parameters.startAutoplayDelay
			if(slider){
				initSlider(slider, breakpoints, slidesPerView, infiniteSwipe)
			}
		}
	}
}

const initSlider = (slider, breakpoints, slidesPerView, infiniteSwipe) =>{
	const btnNext = slider.querySelector('.btn-next')
	const btnPrev = slider.querySelector('.btn-prev')
	const slides = slider.querySelectorAll('.slider__item')
	const renderPoint = slider.querySelector('.slider__navigation')
	renderSlider(slider, breakpoints, slides, renderPoint)
	const btnPoints = slider.querySelectorAll('.slider__btn-point')
	window.addEventListener('resize', ()=>{ renderSlider(slider, breakpoints, slides, renderPoint)})
	btnNext.addEventListener('click', ()=>{ switchSlide(slider, slides, true, slidesPerView, infiniteSwipe, breakpoints)})
	btnPrev.addEventListener('click', ()=>{ switchSlide(slider, slides, false, slidesPerView, infiniteSwipe, breakpoints)})
	renderPoint.addEventListener('click', (event)=>{ switchSlideUsingPointButtons(event, slider, slides, breakpoints, slidesPerView)})
	// launchAutoplay(slider, slides, 1, btnPoints, slidesPerView, autoplaySlide, delayAutoplay, breakpoints)
}

// let intervalID

// const launchAutoplay = (slider, slides, parseIdSlide, btnPoints, slidesPerView, autoplaySlide, delayAutoplay, breakpoints) =>{
// 	intervalID = setInterval (()=>{autoplay(slider, slides, parseIdSlide, btnPoints, slidesPerView, autoplaySlide, breakpoints)}, delayAutoplay)
// }

// const autoplay = (slider, slides, parseIdSlide, btnPoints, slidesPerView, autoplay, breakpoints) =>{
// 	slidesPerView = findCountActiveSlides(breakpoints)
// 	if(autoplay){
// 		slides.forEach(slide=>{
// 			if(slide.classList.contains('slider__item_active')){
// 				const idCurrentSlide = slide.getAttribute('data-id')
// 				if(slide.getAttribute('data-id')==idCurrentSlide){
// 					slide.classList.remove('slider__item_active')
// 				}
// 				if(slide.dataset.id<slides.length/slidesPerView){
// 					parseIdSlide=parseInt(slide.dataset.id)+1
// 				}
// 				else{
// 					parseIdSlide = 1
// 				}
// 			}
// 		})
// 		btnPoints.forEach(point=>{
// 			if(point.classList.contains(point.classList[0]+'_active')){
// 				point.classList.remove(point.classList[0]+'_active')
// 			}
// 		})
// 		let activeSlide = slider.querySelectorAll(`.slider__item[data-id="${parseIdSlide}"]`)
// 		active(activeSlide)
// 		let activePoint = slider.querySelectorAll(`.slider__btn-point[data-id="${parseIdSlide}"]`)
// 		active(activePoint)
// 	}
// }


const renderSlider = (slider, breakpoints, slides, renderPoint) =>{
	let slidesPerView = 1
	slidesPerView = findCountActiveSlides(breakpoints)
	addIDForTheSlides(slides, slidesPerView)
	slides.forEach(activeSlide=>{
		if(activeSlide.getAttribute('data-id')>1){
			activeSlide.classList.remove('slider__item_active')
		}
	})
	let activeFirstSlides = slider.querySelectorAll(`.slider__item[data-id="1"]`)
	active(activeFirstSlides)
	if(renderPoint){
		addSwitchingPointButtons(renderPoint, slides, slidesPerView)
	}
}

const findCountActiveSlides = (breakpoints) =>{
	if (document.documentElement.clientWidth >= 769) {
		return breakpoints["XXL"].slidesPerView
	}
	else if(document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth >= 481 ){
		return breakpoints["XL"].slidesPerView
	}
	else if(document.documentElement.clientWidth <= 480){
		return breakpoints["L"].slidesPerView
	}
}

const addIDForTheSlides = (slides, slidesPerView)=>{
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

const	switchSlide = (slider, slides, nextorprev, slidesPerView, infiniteSwipe, breakpoints) =>{
	let idActiveSlide
	const btnPoints = slider.querySelectorAll('.slider__btn-point')
	slidesPerView = findCountActiveSlides(breakpoints)
	slides.forEach(slide=>{
		if(slide.classList.contains('slider__item_active')){
			const idCurrentSlide = slide.getAttribute('data-id')
			if(slide.getAttribute('data-id')==idCurrentSlide){
				slide.classList.remove('slider__item_active')
			}
			idActiveSlide = parseInt(idCurrentSlide) + (nextorprev?1:-1) 
		}
	})
	let activeSlide = slider.querySelectorAll(`.slider__item[data-id="${idActiveSlide}"]`)
	if(nextorprev?(idActiveSlide <= Math.ceil(slides.length/slidesPerView))
	:(idActiveSlide <= Math.ceil(slides.length/slidesPerView)&&idActiveSlide > 0)){
		active(activeSlide)
		// restartAutoplay(slider, slides, idActiveSlide, btnPoints, slidesPerView, autoplaySlide, delayAutoplay, breakpoints)
	}
	else{
		infiniteSwipe?(idActiveSlide = nextorprev?1:Math.ceil(slides.length/slidesPerView)):
		(idActiveSlide = nextorprev?Math.ceil(slides.length/slidesPerView):1)
		console.log(idActiveSlide)
		activeSlide = slider.querySelectorAll(`.slider__item[data-id="${idActiveSlide}"]`)
		active(activeSlide)
		// restartAutoplay(slider, slides, idActiveSlide, btnPoints, slidesPerView, autoplaySlide, delayAutoplay, breakpoints)
	}
	
	switchActivePointButtons(slider, nextorprev, infiniteSwipe)
}

const switchActivePointButtons = (slider, nextorprev, infiniteSwipe)=>{
	const btnPoints = slider.querySelectorAll('.slider__btn-point')
	let idActivePoint=1
	btnPoints.forEach(point=>{
			if(point.classList.contains('slider__btn-point_active')){
					point.classList.remove('slider__btn-point_active')
					idActivePoint=parseInt(point.dataset.id)+(nextorprev?1:-1) 
			}
	})
	let activePoint = slider.querySelector(`.slider__btn-point[data-id="${idActivePoint}"]`)
	if(nextorprev?(idActivePoint<=btnPoints.length)
			:(idActivePoint<=btnPoints.length&&idActivePoint>0)){
			activePoint.classList.add('slider__btn-point_active')
	}
	else{
		infiniteSwipe?
		(idActivePoint=nextorprev?1:btnPoints.length):
		(idActivePoint=nextorprev?btnPoints.length:1)
		activePoint = slider.querySelector(`.slider__btn-point[data-id="${idActivePoint}"]`)
		activePoint.classList.add('slider__btn-point_active')
	}
}

const active =($block)=> {
	$block.forEach(e=>{
		const active = e.classList[0]+'_active'
		e.classList.remove(active, true)
		e.classList.toggle(active, true)
	})
}

const addSwitchingPointButtons = (renderPoint, slides, slidesPerView)=>{
	while (renderPoint.firstChild) {
		renderPoint.removeChild(renderPoint.firstChild);
	}
	for(let count = 1; count <= Math.ceil(slides.length/slidesPerView); count++){
			if(count == 1){
					renderPoint.insertAdjacentHTML('afterbegin', `<button class="slider__btn-point slider__btn-point_active" data-id="${count}"></button>`)
			}
			else{
					renderPoint.insertAdjacentHTML('beforeend', `<button class="slider__btn-point" data-id="${count}"></button>`)
			}   
	}
}

const switchSlideUsingPointButtons=(event, slider, slides, breakpoints, slidesPerView)=>{
	const btnPoints = slider.querySelectorAll('.slider__btn-point')
	slidesPerView = findCountActiveSlides(breakpoints)
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
					// restartAutoplay(slider, slides, slide.dataset.id, btnPoints, slidesPerView, autoplaySlide, delayAutoplay, breakpoints)
				}
			})    
		})
	}
}

// const restartAutoplay = (slider, slides, parseIdSlide, btnPoints, slidesPerView, autoplaySlide, delayAutoplay, breakpoints) =>{
// 	clearInterval(intervalID)
// 	intervalID = setInterval (()=>{autoplay(slider, slides, parseIdSlide, btnPoints, slidesPerView, autoplaySlide, breakpoints)}, delayAutoplay)
// }