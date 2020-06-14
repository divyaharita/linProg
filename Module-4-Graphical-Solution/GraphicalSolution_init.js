	$( function() {
						$( "#slider" ).slider({     // set up apple slider
			
								min: 10,
								max: 50,
								step: 5,
								value: 30,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_a").val(ui.value)
																	makeChart()
															}
							});
							
							
						$( "#slider1").slider({    // set up banana slider 
			
								min: 0,
								max: 50,
								step: 5,
								value: 15,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_b").val(ui.value)
																	makeChart()
															}
							});
							
							
								$( "#slider2").slider({    // set up calories slider 
			
								min: 0,
								max: 200,
								step: 5,
								value: 120,
								animate: true,
								slide: function( event, ui ) {		console.log("aaa")
																	console.log(ui.value)
																	$("#val_c").val(ui.value)
																	$("#minCaloriesSpan").text(ui.value)
																	makeChart()
															}
							});
							
								$( "#slider3").slider({    // set up calories slider 
			
								min: 0,
								max: 500,
								step: 10,
								value: 250,
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
							$("#handle2").html("<strong style='font-size:18pt;'>&#8377;</strong>")
							
							$("#slider3").children("span").eq(0).attr("id","handle3")
							$("#handle3").html("<strong style='font-size:18pt;'>&#8377;</strong>")							
							
							$("#set_a").text("30")
							$("#set_b").text("15")
							
							$("#numApples").text("30")
							$("#numBananas").text("15")
							
							$("#minCaloriesSpan").text("120")
					}
	);
