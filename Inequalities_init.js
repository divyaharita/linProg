	$( function() {
						$( "#slider" ).slider({     // set up apple slider
			
								min: 10,
								max: 75,
								step: 5,
								value: 50,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_a").val(ui.value)
																	makeChart()
															}
							});
							
							
						$( "#slider1").slider({    // set up banana slider 
			
								min: 10,
								max: 120,
								step: 5,
								value: 90,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_b").val(ui.value)
																	makeChart()
															}
							});
							
							
								$( "#slider2").slider({    // set up calories slider 
			
								min: 50,
								max: 750,
								step: 50,
								value: 500,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_c").val(ui.value)
																	$("#minCaloriesSpan").text(ui.value)
																	makeChart()
															}
							});
							
								$( "#slider3").slider({    // set up calories slider 
			
								min: 50,
								max: 750,
								step: 50,
								value: 500,
								animate: true,
								slide: function( event, ui ) {		console.log("max cals")
																	console.log(ui.value)
																	$("#val_d").val(ui.value)
																	$("#maxCaloriesSpan").text(ui.value)
																	makeChart()
															}
							});							
							
							$("#slider").children("span").eq(0).attr("id","handle0")
							$("#handle0").html("<img src='apple.jpg' class='sliderImg'>")
							
							
							$("#slider1").children("span").eq(0).attr("id","handle1")
							$("#handle1").html("<img src='banana2.png' class='sliderImg'>")
							
							$("#slider2").children("span").eq(0).attr("id","handle2")
							$("#handle2").html("<strong style='font-size:14pt;'>&gt;</strong>")
							
							$("#slider3").children("span").eq(0).attr("id","handle3")
							$("#handle3").html("<strong style='font-size:14pt;'>&lt;</strong>")							
							
							$("#set_a").text("50")
							$("#set_b").text("90")
							
							$("#numApples").text("50")
							$("#numBananas").text("90")
					}
	);
