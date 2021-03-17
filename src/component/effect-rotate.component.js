import { Component } from '../core/component';

export class EffectRotateComponent extends Component{
  constructor(id){
    super(id)
  }
  init(){
    if(this.$el){
      const workItem = this.$el.querySelectorAll('.work__item')
      if(workItem){
        addEffectRotate(workItem)
      }
    }
  }
}
const active =($block)=> {
	const active=$block.classList[0]+'_active'
	$block.classList.toggle(active)
}

const addEffectRotate=(workItem)=>{
 
  workItem.forEach(elem=>{
    const buttonForward = elem.querySelector('.front-side')
    const buttonBack = elem.querySelector('.back')
    buttonForward.addEventListener('click', function(){
      if(!elem.classList.contains('work__item_active')){
        elem.classList.add('work__item_active')
      }
      else{
        elem.classList.remove('work__item_active')
      }
    })
    buttonBack.addEventListener('click', function(){
      if(elem.classList.contains('work__item_active')){
        elem.classList.remove('work__item_active')
      }
      else{
        elem.classList.add('work__item_active')
      }
    })
  })
}