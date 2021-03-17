import {Component} from "../core/component";

export class FilterComponent extends Component{
	constructor(id){
		super(id)
	}
	init(){
    if(this.$el){
      const filterOptions = this.$el.querySelectorAll('.filter__option')
      const products = this.$el.querySelectorAll('.product')
      if(this.$el){
        filterFind(filterOptions, products)
      }
    }
	}
}
const active =($block)=> {
	const active=$block.classList[0]+'_active'
	$block.classList.toggle(active)
}
function filterFind(filterOptions, products){
  filterOptions.forEach(event => {
    event.addEventListener('click', e=>{
      const dontActive = event.classList[0]+'_active'
      filterOptions.forEach(e=>{
        e.classList.remove(dontActive)
      })
      active(e.target)
      products.forEach( elem=>{
        elem.classList.add('show')
        if(e.target.dataset.type!=elem.dataset.type&&e.target.dataset.type!=='all'){
          elem.classList.add('animate')
          elem.classList.remove('show')
          elem.classList.add('hide')
        }
        else{
          elem.classList.add('show')
          elem.classList.remove('animate')
          elem.classList.remove('hide')
          
        }

      })
    })
  })
}