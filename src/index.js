
import './sass/style.sass';
import './component/polyfills.component'
import { HeaderComponent } from './component/header.component'
import { SliderComponent } from './component/main-slider.component';
import { SmoothScrollingComponent } from './component/smooth-scrolling.component';
import { FilterComponent } from './component/filter.component'
import { EffectRotateComponent } from './component/effect-rotate.component'
import findHeightMenu from './component/height-menu.component'

const fileImg=require.context("./img/", true, /\.(png|svg|jpg|gif)$/);
const mainMenu = new HeaderComponent('main-menu')
findHeightMenu()
const allSmoothScrolling = new SmoothScrollingComponent()
// const mainSlider = new SliderComponent('slider')
const mainSlider = new SliderComponent('testslider', {
		// autoplay: true,
		// startAutoplayDelay: 1000,
		infiniteSwipeSlides: true,
		breakpoints: {
			"L": {
				slidesPerView: 1,
			},
			"XL": {
				slidesPerView: 2,
			},
			"XXL": {
				slidesPerView: 3,
			}
		}
	}
)
// const testSlider = new SliderComponent('test', {
// 		autoplay: true,
// 		startAutoplayDelay: 1000,
// 		infiniteSwipeSlides: false,
// 		breakpoints: {
// 			"L": {
// 				slidesPerView: 1,
// 			},
// 			"XL": {
// 				slidesPerView: 2,
// 			},
// 			"XXL": {
// 				slidesPerView: 3,
// 			}
// 		}
// 	}
// )
const rotateWorkItem = new EffectRotateComponent('work__list')
// const secondSlider = new SliderComponent('secondSlider')
const filterTypeSite = new FilterComponent('filter')


// secondSlider.configureSlider(
// 	{
// 		autoplay: false,
// 	}
// )