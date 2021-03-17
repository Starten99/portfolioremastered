module.exports = function findHeightMenu () {
	const $menu = document.querySelector('.main-menu')
	if($menu){
		const getVhMenu = () => $menu.getBoundingClientRect().height
		const setVhMenu = vh => {
			document.documentElement.style.setProperty('--defvhmenu', `${ vh }px`)
		}
		const changeVhMenu  = () => {
			setVhMenu( getVhMenu() )
		}
		changeVhMenu()
		window.addEventListener( 'resize', changeVhMenu )
	}
}
