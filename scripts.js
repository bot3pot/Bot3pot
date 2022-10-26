var menu = 'close';

function MenuMobile() {
	var mobile_menu = document.getElementById('mobile_menu');
	var iconmenu = document.getElementById('iconmenu');

	if (menu == 'close') {
		mobile_menu.style.width = '100%';
		menu = 'open';
		iconmenu.src = 'https://i.postimg.cc/tRxJfmHt/menu-open.png';
	} else {
		mobile_menu.style.width = '0%';
		menu = 'close';
		iconmenu.src = 'https://i.postimg.cc/4yV39n1F/menu-close.png';
	}
}






