		let myCanvasContext = document.getElementById('myCanvas').getContext('2d');
		Chart.defaults.global.defaultFontFamily="Caveat";
		Chart.defaults.global.defaultFontSize=25;
		var totalCalories = 500	
		var currentTab = 1
		chartParameterObject =
		{
				type:'scatter',
				data:
						{
							
							datasets:[   // array of datasets, one for each curve
							
										{  // first dataset
											label: 'Calories per week',
											data:	[
														{x:0, y:0},  //this dataset has only one point
														
														
													],
											
											borderWidth:1,
											borderColor:'darkblue',
											hoverBorderWidth:14,
											hoverBorderColor:'red',
											pointRadius: 7,
											pointStyle: "circle",
											backgroundColor: "#c0c0e380",
											borderColor: "purple",
											borderWidth: 3,
											showLine: true,
											lineTension: 0,
											fill: "+1"
										},
							
										
										{   //second dataset
										    label:".", 
											data: [ { x:1, y: 1},{ x:8, y:25}], 
											borderWidth:3,
											showLine: true,
											fill: false,
											borderColor:"#124a1d",
											backgroundColor:"lightblue",
											pointRadius:7,
											lineTension:0
										},
								
								
										{ // star marker for clicked point
											data: [{x:12, y:12}],
											showLine: false,
											pointStyle: "star",
											pointRadius: 12,
											borderWidth: 3,
											borderColor: "red"
										} 
									]
						},
				
				options:{
						title:
							{
								display:false,
								text:'Munmun',
								fontSize:45
							},
					
					
						legend:
							{
								display:false,
								position:'top',
								labels:{
											fontColor:'#000',
											fontSize:20
										}
							},
						
						layout:{
								padding:{
										left:0,
										right:0,
										bottom:0,
										top:0
										}
								},
							
						tooltips:{
									enabled:true,
									backgroundColor:"pink",
									titleFontColor:"red",
									bodyFontColor:"green",
									borderColor: "brown",
									borderWidth: 5
								},
						scales:
								{
									yAxes: 
											[
												{ 	scaleLabel: { 	display: true,
																	labelString: 'Bananas per Week (Y)',
																	fontColor: 'black', fontSize: 30
															
																},	
													display: true,
													type: "linear",
													ticks:	{
																min:0, max: 10,
																fontSize: 32,
																fontColor: 'black'
															}
												}
											],
											
									xAxes:  [
												{
													scaleLabel: { 	display: true,
																	labelString: 'Apples per Week (X)',
																	fontColor: 'black', fontSize: 30
													},
													ticks: {fontSize: 32, fontColor:'black',
															min:0, max:10
															}										
												
												}
									
											]
								
								}
						}
		};
		
		var ccc = new Chart(myCanvasContext, chartParameterObject)
	function set_a() //event handler for first text box
	
	
					{
						console.log($("#val_a").val())
						makeChart()
					}
					
	function set_b() //event handler for second text box
				{
					console.log($("#val_b").val())
					makeChart()
				}

var myData






	function makeChart()
				{	myData = []; myData2=[]
					a=1.0*$("#val_a").val()
					b=1.0*$("#val_b").val()
					
					$("#numApples").text(a)
					$("#numBananas").text(b)
					
					for (i=0; i<12; i++)
						{	
							myPoint ={}  // Point for first line -- datasets[0]
							myPoint2={}   // Point for second line -- datasets[1]
							
							myPoint.x = i*1.0
							myPoint2.x = i*1.0
							
							
							
							switch(currentTab)
							{	case 1:
								myPoint.y =  ($("#val_c").val() - a * i)/ b
								break;
								
								case 2:
								myPoint.y =  ($("#val_c").val() - a * i)/ b 
								myPoint2.y= ($("#val_d").val() - a * i ) / b 
								
															
								
								break;
								
								case 3:
								myPoint.y =  ($("#val_c").val() - a * i)/ b 
								myPoint2.y= ($("#val_d").val() - a * i ) / b 
								break;
								
								case 4:
								myPoint.y =  ($("#val_c").val() - a * i)/ b 
								myPoint2.y= ($("#val_d").val() - a * i ) / b 
								break;
								
								case 5:
								
								myPoint.y =  ($("#val_c").val() - a * i)/ b 
								myPoint2.y= ($("#val_d").val() - a * i ) / b 
								break;
								
								
								default:
								myPoint.y = a * i + otherCals
								break;
								
							}
			
							myData.push(myPoint);
							myData2.push (myPoint2)
							
							//console.log("i,a,b "+i+" " + a + " " + b + " " + myPoint.y)
						}
						
							if (myData2[5].y < myData[5].y)
												{ ccc.data.datasets[0].backgroundColor="#fb9d9d70"}
												else
												{ccc.data.datasets[0].backgroundColor="#c0c0e380"}
							
						//	console.log("a, b" + a + " , " + b + " : " )
							ccc.data.datasets[0].data=myData
							ccc.data.datasets[1].data=myData2 
							ccc.update()
							
							if (currentTab==4)
							{
								updateTable()
								
							}
						}
				
	

	$("#val_a").val(50)
	$("#val_b").val(90)
	$("#val_c").val(500)
	a=$("#val_a").val()
	b=$("#val_b").val()
					
	$("#numApples").text(50)
	$("#numBananas").text(90)			
	$("#set_b").text("90")
	$("#set_a").text("50")	

	var otherCals=0

    makeChart()
	
	var currentTab=1
	
	
	function goTab(t,tn)
	{	currentTab=tn 
		console.log("goTab --> " + tn + " " + t.id);
		var tt=$(t)
		console.log(tt.hasClass("activeTab"))
		if (tt.hasClass("inactiveTab"))
			{ 
				console.log("-INactive-") 
				$(".tab").removeClass("activeTab")
				$(".tab").addClass("inactiveTab")
			  
			  tt.addClass("activeTab")
			  tt.removeClass("inactiveTab")
			  
			  $(".stuffDiv").hide()
			  $(".stuffDiv").addClass("inactiveStuff")
			  
			  
			  $("#stuff" + tn).removeClass("inactiveStuff")
			  $("#stuff" + tn).show(300)
			  
			  if (tn==1)
				{$("#btnPrev").css("display","none")}
				else
				{$("#btnPrev").css("display","inline")}
			
			if(tn>=5)   // last tab --> no next tab
			{$("#btnNext").css("display","none")}
			else 
			{$("#btnNext").css("display","inline")}
			}
			
			

			if(tn==1){
						
							
							$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numBananas").text(90)
							
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
						$("#minCalsDiv").addClass("col-12"); 
						$("#minCalsDiv").removeClass("col-6");
						
						
						$("#maxCalsDiv").hide(700)
						
						ccc.data.datasets[2].data[0]={x:12, y:12}	
						ccc.options.onClick=null
						
						}
			
			if(tn==2){

							$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numBananas").text(90)


						$("#minCalsDiv").removeClass("col-12"); 
						$("#minCalsDiv").addClass("col-6");
						$("#minCalsTitleSpan").text("Min Cals. :")
						
						$("#maxCalsDiv").show(700)

						$("#slider2").slider("value",400)
						$("#minCaloriesSpan").text("400")
						$("#val_c").val('400')
						
						
						$("#val_d").val('600')
						$("#maxCaloriesSpan").text("600")
						$("#val_d").val('600')
						$("#slider3").slider("value",600)
						
						ccc.data.datasets[2].data[0]={x:12, y:12}	
						ccc.options.onClick=null
						
					}			
					 
			if(tn==3) {
							$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numBananas").text(90)


						$("#minCalsDiv").removeClass("col-12"); 
						$("#minCalsDiv").addClass("col-6");
						$("#minCalsTitleSpan").text("Min Cals. :")
						
						$("#maxCalsDiv").show(700)

						$("#slider2").slider("value",400)
						$("#minCaloriesSpan").text("400")
						$("#val_c").val('400')
						
						
						$("#val_d").val('600')
						$("#maxCaloriesSpan").text("600")
						$("#val_d").val('600')
						$("#slider3").slider("value",600)
												
						ccc.data.datasets[2].data[0]={x:12, y:12}	
						ccc.options.onClick=null
							
						}
						
			if (tn==4) {
							$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numBananas").text(90)


						$("#minCalsDiv").removeClass("col-12"); 
						$("#minCalsDiv").addClass("col-6");
						$("#minCalsTitleSpan").text("Min Cals. :")
						
						$("#maxCalsDiv").show(700)

						$("#slider2").slider("value",400)
						$("#minCaloriesSpan").text("400")
						$("#val_c").val('400')
						
						
						$("#val_d").val('600')
						$("#maxCaloriesSpan").text("600")
						$("#val_d").val('600')
						$("#slider3").slider("value",600)
						
						ccc.data.datasets[2].data[0]={x:3, y:4}
						
						ccc.options.onClick= function(e) {star2Click(e)}
						
						}
						
			if (tn==5)
						{	
					
								$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numBananas").text(90)


						$("#minCalsDiv").removeClass("col-12"); 
						$("#minCalsDiv").addClass("col-6");
						$("#minCalsTitleSpan").text("Min Cals. :")
						
						$("#maxCalsDiv").show(700)

						$("#slider2").slider("value",400)
						$("#minCaloriesSpan").text("400")
						$("#val_c").val('400')
						
						
						$("#val_d").val('600')
						$("#maxCaloriesSpan").text("600")
						$("#val_d").val('600')
						$("#slider3").slider("value",600)
						
						ccc.data.datasets[2].data[0]={x:3, y:4}
						
						ccc.options.onClick= function(e) {star2Click(e)}
					
						/*	$("#bananaSliderBox").show(1000)
							$("#bananasHead").show(1000)
							$("#caloriesSliderBox").show(500);
							$("#otherSourcesH4").hide(1000)
							$("#totalCaloriesH4").show()
							
														$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numApples").text(90)
							
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
						*/
						}
			
			makeChart()
			
	
	}
	
		function goPrev()
		{	
			console.log("goPrev")
			tn=currentTab-1
			if(tn>=1)
			{
			
			tt=$("#tab"+tn).eq(0)
			goTab(tt,tn)
			}
		
		
		}

	function goNext()
		{if(currentTab < 6)
			{
				tn=currentTab+1
				tt=$("#tab"+tn).eq(0)
				goTab(tt,tn)
			}
		}


	function showAnswer(n)
	{
		$("#answer" + n).show(300)
	}
	
	var aplz=3; var bananz=4;
	
	function star2Click(e)
	{	
			console.log("click!!" + " " + e.offsetX + " " + e.offsetY); 
			clkX=ccc.scales["x-axis-1"].getValueForPixel(e.offsetX)
			clkY=ccc.scales["y-axis-1"].getValueForPixel(e.offsetY)
			console.log(clkX 
			+ " " + clkY)
			
			ccc.data.datasets[2].data=[{x:clkX, y:clkY}]
			ccc.update()
			
			aplz=clkX.toFixed(1); bananz=clkY.toFixed(1)
			
			updateTable()
	}
	
	function updateTable()
		{
			$("#tdQtyA").text(aplz)
			$("#tdQtyB").text(bananz)
			
			$("#tdCalA").text(	(aplz*a).toFixed(0))
			$("#tdCalB").text( (bananz * b).toFixed(0))
			
			$("#tdCalsPerApple").text(   $("#numApples").text()  )
			$("#tdCalsPerBanana").text(   $("#numBananas").text()  )
			
			$("#tdTotalCals").text(   (1.0*$("#tdCalA").text() + 1.0* $("#tdCalB").text()).toFixed(1)  )
			
			$("#tdCostA").text  (    ( 1.0*$("#tdRateA").text() * aplz ).toFixed(1))
			$("#tdCostB").text  (    ( 1.0*$("#tdRateB").text() * bananz ).toFixed(1) )
			
			$("#tdTotalCost").text ( 1.0* $("#tdCostA").text() + 1.0*$("#tdCostB").text()  )
			
			
			 if (    1.0*$("#tdTotalCals").text() < 1.0*$("#minCaloriesSpan").text()
				 ||  1.0*$("#tdTotalCals").text() > 1.0*$("#maxCaloriesSpan").text() 
			    )
					 {
						   $("#tdTotalCals").css("background-color", "#f4d0d0")
						   $("#tdTotalCals").css("color","red")
						   $("#thCalories").css("background-color","#f4d0d0")
					 }
					    else
					 {
							$("#tdTotalCals").css("background-color", "##bbe1bb")
							$("#tdTotalCals").css("color","black")
							$("#thCalories").css("background-color","#e0e0f3")
					 }
			
		}
/*
function doHash()
	{   console.log("hash: " + document.location.hash)
		hasH=1.0 * document.location.hash.substring(2,1).trim()
		currentTab=hasH
		tabElem=$("#tab" + hasH).get(0)
		console.log(" - hasH - " + hasH + " tabsel -> " + tabElem)
		if(document.location.hash != "")
			{
				
				currentTab=hasH
				goTab(tabElem , hasH)
			}
	}
	
doHash()
*/
