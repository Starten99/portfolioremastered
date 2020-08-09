
import './scss/style.scss';
import './component/polyfills.component'
import { HeaderComponent } from './component/header.component'
import { SliderComponent } from './component/main-slider.component';
import { MainHeaderComponent } from './component/main-header.component';

const fileImg=require.context("./img/", true, /\.(png|svg|jpg|gif)$/);
const header = new HeaderComponent('header')
const mainHeader=new MainHeaderComponent('main__header')
const mainSlider = new SliderComponent('clider')
