
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
		var uluru = {lat: -33.4262974, lng: -70.669858};
		var map = new google.maps.Map(
			document.getElementById('map'), {
			zoom: 4,
			center: uluru
	});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
	}

/*Filtrar Restaurantes*/

function filterRestaurant(id) {
	if(id === 'mexico'){
		$('#mexico').show();
		$('#japon').hide();
		$('#thai').hide();
		$('#chile').hide();
	}else if (id === 'japon'){
		$('#mexico').hide();
		$('#japon').show();
		$('#thai').hide();
		$('#chile').hide();
	}else if(id === 'thai'){
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').show();
		$('#chile').hide();
	}else if(id === 'chile'){
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').hide();
		$('#chile').show();
	}
};




