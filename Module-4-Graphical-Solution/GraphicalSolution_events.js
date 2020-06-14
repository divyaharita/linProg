		let myCanvasContext = document.getElementById('myCanvas').getContext('2d');
		Chart.defaults.global.defaultFontFamily="Caveat";
		Chart.defaults.global.defaultFontSize=25;
		Chart.defaults.global.maintainAspectRatio=false
	//	Chart.defaults.global.responsive=true
		var totalCalories = 500	
		var currentTab = 1
		chartParameterObject =
		{
				type:'scatter',
				data:
						{
							
							datasets:[   // array of datasets, one for each curve     [0]
							
										{  // first dataset
											label: 'Cost Contour',
											data:	[
														{x:0, y:0},  //this dataset has only one point
														
														
													],
											
											borderWidth:1,
											borderColor:'darkblue',
											hoverBorderWidth:14,
											hoverBorderColor:'red',
											pointRadius: 0,
											pointStyle: "circle",
											borderColor: "blue",
											borderDash: [15,10],
											borderWidth: 5,
											fill:false,
											showLine: true,
											lineTension: 0
											
										},
							
										
										{   //second dataset                     [1]
										    label:"First Constraint", 
											data: [ { x:1, y: 1},{ x:8, y:25}], 
											borderWidth:3,
											showLine: true,
											fill: false,
											
											borderColor:"green",
											backgroundColor:"#dadaff60",
											pointRadius:4,
											lineTension:0
										},
								
										{ 	// second constraint  				[2]
											label: "Second Constraint",
											data: [{x:1, y:2},{x:2,y:3,},{x:3,y:2},{x:4,y:2}],
											borderWidth: 3,
											showLine: true,
											fill: false,
											borderColor: "brown",
											pointRadius: 4,
											lineTension: 0,
											backgroundColor:"#eaf4e760"
										},
										
										{  // third constraint                  [3]
																						label: "Second Constraint",
											data: [{x:1, y:2},{x:2,y:3,},{x:3,y:2},{x:4,y:2}],
											borderWidth: 3,
											showLine: true,
											fill: false,
											borderColor: "gray",
											pointRadius: 4,
											lineTension: 0,
											backgroundColor:"#eaf4e760"
											
										},
										
										{	//  combined constraints 			[4]
											label: "both constraints",
											data: [{x:1, y:2},{x:2,y:3,},{x:3,y:2},{x:4,y:2}],
											borderWidth: 1,
											showLine: true,
											fill: 5,
											borderColor: "#f5f5f5",
											pointRadius: 0,
											lineTension: 0,
											backgroundColor: "#dadaff60"
										},
										
										
										{// dummy dataset for upper fill boundary of feasible region  [5]
										
										    data: [{x: 0, y: 19.5},{x: 19.5, y:0}],
											showLine: true,
											fill: false
											
										},
										
										{ // star marker for clicked point
											data: [{x:0, y:0}],
											showLine: false,
											pointStyle: "star",
											pointRadius: 12,
											borderWidth: 3,
											borderColor: "red",
											fill: false
										} ,
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
															},
													gridLines: {zeroLineWidth: 3,
																color: "#505050"
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
															},

													
													gridLines: {zeroLineWidth: 3,
																color: "#505050"
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
				{	myData0 = []; myData1=[]; myData2=[]; myData3=[]; myData4=[]; myData5=[]
					a=1.0*$("#val_a").val()
					b=1.0*$("#val_b").val()
					
					$("#numApples").text(a)
					$("#numBananas").text(b)
					
					for (i=0; i<12; i++)
						{	
							myPoint0 ={}  // Point for cost contour -- datasets[0]
							myPoint1={}   // Point for first constraint -- datasets[1]
							myPoint2={} // point for second constraint 
							myPoint3={} // point for third constraint
							myPoint4={} // combined constraints
							myPoint5={} // point for shading boundary
							
							myPoint0.x = i*1.0
							myPoint1.x = i*1.0
							myPoint2.x = i*1.0
							myPoint3.x = i*1.0
							myPoint4.x = i*1.0
							myPoint5.x = i*1.0
							
							
							switch(currentTab)
							{	case 1:
								myPoint0.y =  ($("#val_c").val() - a * i)/ b
								break;
								
								case 2:
								myPoint0.y =  ($("#val_c").val() - a * i)/ b 
								myPoint1.y= -50.*i/40 + 360/40 
								myPoint5.y= 15.
								
															
								
								break;
								
								case 3:
								myPoint0.y =  ($("#val_c").val() - a * i)/ b 
								
								myPoint1.y= -50.*i/40 + 360/40 
								
								
								myPoint5.y= 15.
								break;
								
								case 4:
								myPoint0.y =  ($("#val_c").val() - a * i)/ b 
								myPoint1.y= 9.0 - 9.0  / 6.0 * i
								myPoint2.y = 6.0 - 6.0 / 8.0 * i
								
								
								myPoint4.y = Math.max( myPoint1.y, myPoint2.y) 
								myPoint5.y= 15.
								break;
								
								case 5:
								
								myPoint0.y =  ($("#val_c").val() - a * i)/ b 
								myPoint1.y= 9.0 - 9.0  / 3.0 * i
								myPoint2.y = 3.0 - 3.0 / 9.0 * i
								myPoint3.y = 6.0 - i
								
								
								myPoint4.y = Math.max( myPoint1.y, myPoint2.y, myPoint3.y) 
								myPoint5.y= 15.
								break;
								
								
								default:
								myPoint.y = a * i + otherCals
								break;
								
							}
			
							myData0.push(myPoint0);
							myData1.push (myPoint1)
							myData2.push(myPoint2)
							myData3.push(myPoint3)
							myData4.push(myPoint4)
							myData5.push(myPoint5)
							//console.log("i,a,b "+i+" " + a + " " + b + " " + myPoint.y)
						}
						
							
							
						//	console.log("a, b" + a + " , " + b + " : " )
							ccc.data.datasets[0].data=myData0
							ccc.data.datasets[1].data=myData1 
							ccc.data.datasets[2].data=myData2
							ccc.data.datasets[3].data=myData3
							ccc.data.datasets[4].data=myData4
							ccc.data.datasets[5].data=myData5
							
							ccc.update()
							
							if (currentTab==4)
							{
								updateTable()
								
							}
						}
				
	

	$("#val_a").val(30)
	$("#val_b").val(15)
	$("#val_c").val(120)
	a=$("#val_a").val()
	b=$("#val_b").val()
					
	$("#numApples").text("30")
	$("#numBananas").text("50")			
	$("#set_b").text("30")
	$("#set_a").text("50")	
	
	$(".canvasBox").css("height", 0.7*$(".canvasBox").width()+"px")

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
						
							
							$("#val_a").val(30)
							$("#slider").slider("value",30)
							$("#numApples").text(30)
							
							$("#val_b").val(15)
							$("#slider1").slider("value",15)
							$("#numBananas").text(15)
							
							$("#minCaloriesSpan").text("120")
							$("#val_c").val("120")
							$("#slider2").slider("value",120)
							
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
						$("#minCalsDiv").addClass("col-12"); 
						$("#minCalsDiv").removeClass("col-6");
						$("#minCalsTitleSpan").text("Total Cost: ₹");
						
						$("#maxCalsDiv").hide(700)
						
						ccc.data.datasets[2].data[0]={x:12, y:12}	
						ccc.options.onClick=null
						
						}
			
			if(tn==2){

								$("#val_a").val(30)
							$("#slider").slider("value",30)
							$("#numApples").text(30)
							
							$("#val_b").val(15)
							$("#slider1").slider("value",15)
							$("#numBananas").text(15)
							
							$("#minCaloriesSpan").text("120")
							$("#val_c").val("120")
							$("#slider2").slider("value",120)
							
							$("#minCalsTitleSpan").text("Total Cost: ₹");
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
						$("#minCalsDiv").addClass("col-12"); 
						$("#minCalsDiv").removeClass("col-6");
						
						
						$("#maxCalsDiv").hide(700)
						
						
						ccc.options.onClick=null
						ccc.data.datasets[1].fill=5
						
					}			
					 
			if(tn==3) {

								$("#val_a").val(30)
							$("#slider").slider("value",30)
							$("#numApples").text(30)
							
							$("#val_b").val(15)
							$("#slider1").slider("value",15)
							$("#numBananas").text(15)
							
							$("#minCaloriesSpan").text("120")
							$("#val_c").val("120")
							$("#slider2").slider("value",120)
							
							$("#minCalsTitleSpan").text("Total Cost: ₹");
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
						$("#minCalsDiv").addClass("col-12"); 
						$("#minCalsDiv").removeClass("col-6");
						
						
						$("#maxCalsDiv").hide(700)
						
						
						ccc.options.onClick=null
						ccc.data.datasets[1].fill=5
							
						}
						
			if (tn==4) {

								$("#val_a").val(25)
							$("#slider").slider("value",25)
							$("#numApples").text(25)
							
							$("#val_b").val(20)
							$("#slider1").slider("value",20)
							$("#numBananas").text(20)
							
							$("#minCaloriesSpan").text("100")
							$("#val_c").val("100")
							$("#slider2").slider("value",100)
							
							$("#minCalsTitleSpan").text("Total Cost: ₹");
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
						$("#minCalsDiv").addClass("col-12"); 
						$("#minCalsDiv").removeClass("col-6");
						
						
						$("#maxCalsDiv").hide(700)
						
						
						ccc.options.onClick=null
						ccc.data.datasets[1].fill=false
						
						}
						
			if (tn==5)
						{	
					
								$("#val_a").val(25)
							$("#slider").slider("value",25)
							$("#numApples").text(25)
							
							$("#val_b").val(20)
							$("#slider1").slider("value",20)
							$("#numBananas").text(20)
							
							$("#minCaloriesSpan").text("55")
							$("#val_c").val("55")
							$("#slider2").slider("value",55)
							
							$("#minCalsTitleSpan").text("Total Cost: ₹");
							ccc.options.scales.yAxes[0].scaleLabel.labelString="Bananas per Week (Y) "
							ccc.options.scales.xAxes[0].scaleLabel.labelString="Apples per Week (X) "
							
							ccc.options.scales.yAxes[0].ticks.max=10
							
						$("#minCalsDiv").addClass("col-12"); 
						$("#minCalsDiv").removeClass("col-6");
						
						
						$("#maxCalsDiv").hide(700)
						
						
						ccc.options.onClick=null
						ccc.data.datasets[1].fill=false
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
