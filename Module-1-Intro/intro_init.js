	$( function() {
						$( "#slider" ).slider({     // set up apple slider
			
								min: 0,
								max: 12,
								step: 0.5,
								value: 6,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_a").val(ui.value)
																	makeChart()
															}
							});
							
							
						$( "#slider1").slider({    // set up banana slider 
			
								min: 0,
								max: 12,
								step: 0.5,
								value: 4,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_b").val(ui.value)
																	makeChart()
															}
							});
							
							$("#slider").children("span").eq(0).attr("id","handle0")
							$("#handle0").html("<img src='apple.jpg' class='sliderImg'>")
							
							
							$("#slider1").children("span").eq(0).attr("id","handle1")
							$("#handle1").html("<img src='banana2.png' class='sliderImg'>")
							
							
							$("#set_a").text("6")
							$("#set_b").text("4")
							
							$("#numApples").text("6")
							$("#numBananas").text("4")
					}
	);
