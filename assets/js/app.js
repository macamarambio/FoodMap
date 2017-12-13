
$(document).ready(()=> {

	/*Vista splash con duración de 2 a 5 segundos*/
		setTimeout(()=> { // desaparecer
			$(".content").fadeOut(500);
		},3000);
		setTimeout(()=> { // aparecer
			$(".content2").fadeIn(500);
		});


	});

/*Mapa*/
	function initMap() {
		var stgo = {lat: -33.4262974, lng: -70.669858};
		var map = new google.maps.Map(
			document.getElementById('map'), {
			zoom: 4,
			center: stgo
	});
		var marker = new google.maps.Marker({
			position: stgo,
			map: map
		});
	}

/*Filtrar Restaurantes*/

function filter(id) {
	var filt = $('#selector').val();
	$('#rest').val('');
	if(id == 'rest'){
		$('#rest').show();
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').hide();
		$('#chile').hide();
	}
	if(id == 'mexico'){
		$('#rest').hide();
		$('#mexico').show();
		$('#japon').hide();
		$('#thai').hide();
		$('#chile').hide();
	}
	if(id == 'japon'){
		$('#rest').hide();
		$('#mexico').hide();
		$('#japon').show();
		$('#thai').hide();
		$('#chile').hide();
	}
	if(id == 'thai'){
		$('#rest').hide();
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').show();
		$('#chile').hide();
	}
	if(id == 'chile'){
		$('#rest').hide();
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').hide();
		$('#chile').show();
	}
}

$('[data-toggle="tooltip"]').tooltip();



/*
$('.img-food').mouseover(over);

function over(){
	var nombre = $(this).index();
	console.log(nombre);
}
*/

