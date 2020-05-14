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
											backgroundColor: "lightblue",
											borderColor: "purple",
											borderWidth: 3,
											showLine: true,
											lineTension: 0,
											fill: false
										},
							
										
										{   //second dataset
										    label:".", 
											data: [ { x:1, y: 1},{ x:8, y:25}], 
											borderWidth:3,
											showLine:false,
											fill: false,
											borderColor:"green"
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
																	labelString: 'Calories per Week (Y)',
																	fontColor: 'black', fontSize: 30
															
																},	
													display: true,
													type: "linear",
													ticks:	{
																min:0, max: 800,
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
							myPoint ={}
							myPoint.x = i*1.0
							
							
							
							switch(currentTab)
							{	case 1:
								myPoint.y = a * i + otherCals
								break;
								
								case 2:
								myPoint.y = a * i + otherCals
								break;
								
								case 3:
								myPoint.y =  (500 - a * i)/ b  
								break;
								
								case 4:
								myPoint.y =  (500 - a * i)/ b 
								break;
								
								default:
								myPoint.y = a * i + otherCals
								break;
								
							}
							
							
							myData.push(myPoint)
							
							//console.log("i,a,b "+i+" " + a + " " + b + " " + myPoint.y)
							
						}
						
					myData2 = [{x:0, y:-1}]	
				
				//	console.log("a, b" + a + " , " + b + " : " )
					ccc.data.datasets[0].data=myData
					ccc.data.datasets[1].data=myData2 
					ccc.update()
				}
	

	$("#val_a").val(50)
	$("#val_b").val(90)
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
		console.log(tn + " " + t.id);
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
			
			if(tn>=4)
			{$("#btnNext").css("display","none")}
			else 
			{$("#btnNext").css("display","inline")}
			}
			
			
			if(tn==2){	otherCals=200; 
						$("#otherSourcesH4").show(1000)
						
						$("#bananaSliderBox").hide(1000)
							$("#bananasHead").hide(1000)
							
						ccc.options.scales.yAxes[0].scaleLabel.labelString="Calories per Week (Y) "
						
						ccc.options.scales.yAxes[0].ticks.max=800
						
						$("#totalCaloriesH4").hide()
						
					}
			if(tn==1){otherCals=0
						$("#otherSourcesH4").hide(1000)
						
						$("#bananaSliderBox").hide(1000)
							$("#bananasHead").hide(1000)
							
						ccc.options.scales.yAxes[0].scaleLabel.labelString="Calories per Week (Y) "
						
						ccc.options.scales.yAxes[0].ticks.max=800
						
						$("#totalCaloriesH4").hide()
						
						}
			
			
					 
			if(tn==3) {
							$("#bananaSliderBox").show(1000)
							$("#bananasHead").show(1000)
							$("#otherSourcesH4").hide(1000)
							
							$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numApples").text(90)
							
							
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
							$("#totalCaloriesH4").show()
							
							
						}
						
			if (tn==4) {
								$("#bananaSliderBox").show(1000)
							$("#bananasHead").show(1000)
							$("#otherSourcesH4").hide(1000)
							
							$("#val_a").val(50)
							$("#slider").slider("value",50)
							$("#numApples").text(50)
							
							$("#val_b").val(90)
							$("#slider1").slider("value",90)
							$("#numApples").text(90)
							
							
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
							$("#totalCaloriesH4").show()
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
		{if(currentTab < 4)
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