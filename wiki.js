$(document).ready(function(){

	$('#searchBtn').click(function(){

		var searchTerm = $('#searchBar').val();

		var api = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&uselang=user&errorformat=html&search=" + searchTerm + "&namespace=0%7C4%7C8%7C14&limit=10&profile=fuzzy&redirects=return&warningsaserror=1";

		$.ajax({
			type:"GET",
			url:api,
			async:false,
			dataType: "json",
			success: function(data) {
					
				$('#output').html('');
						//clears search result field

				for (var i = 0; i < data[1].length; i++){
					$('#output').append("<li><a href= " + data[3][i] + "><strong>" + data[1][i].toUpperCase() + "</strong></a><p>" + data[2][i] + "</p></li>");
				}
						//populates search result field

				$('#searchBar').val('');
			},
			error: function(errorMessage){
				alert("error!");
			}
		});

	});

		$('#searchBar').keydown(function(e){

			if(e.which == 13) {

				$('#searchBtn').click();

			}
		});

});