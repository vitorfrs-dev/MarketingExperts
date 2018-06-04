$(document).ready(function() {

//Funções que modificam a navbar e o botão de volta ao topo
	function showBtnBackTop(barPostion) {
		let backTop = $('#btnBackTop');
		if (barPostion >= 500) {
			backTop.addClass('visible');
		}

		else {
			backTop.removeClass('visible');
		}
	}

	function changeNavbar(barPostion) {
		let navbar = $('.navbar');

		if (barPostion) {
			navbar.addClass('bg-custom');
		}

		else {
			navbar.removeClass('bg-custom');
		}
	}

	
	/*Quando o documento é carregado confere a posição da bara
	de rolagem e chama as funções
	 * Declarado em escopo de bloco para não guardar a variavel
	 barPosiition
	*/
	{
		let barPostion = $(window).scrollTop();
		changeNavbar(barPostion);
		showBtnBackTop(barPostion);
	}

	$(window).scroll(function () {
		let barPostion = $(window).scrollTop();
		changeNavbar(barPostion);
		showBtnBackTop(barPostion);
	});

	//Botão 'ver mais' da seção de introdução

	$('#btnShow').click(function() {
		$('.hideContent').toggleClass('showContent');

		if ($('.hideContent').hasClass('showContent')) {
			$('#btnShow').html('Esconder');
		}

		else {
			$('#btnShow').html('Ver mais');
		}
	});

	$('#btnBackTop').click(function() {
		$('html,body').animate({scrollTop:0},500); 
	});

});
