		let myCanvasContext = document.getElementById('myCanvas').getContext('2d');
		Chart.defaults.global.defaultFontFamily="Caveat";
		Chart.defaults.global.defaultFontSize=25;
		
		chartParameterObject =
		{
				type:'scatter',
				data:
						{
							
							datasets:[   // array of datasets, one for each curve
							
										{  // first dataset
											label:'(X-A)^2 + B',
											data:	[
														{x:0, y:0},  //this dataset has only one point
														
														
													],
											
											borderWidth:1,
											borderColor:'darkblue',
											hoverBorderWidth:14,
											hoverBorderColor:'red',
											pointRadius: 10,
											pointStyle: "circle",
											backgroundColor: "lightblue",
											borderColor: "purple",
											borderWidth: 3,
											showLine: true,
											lineTension: 0,
											fill: false
										},
										
										{   //second dataset
										    label:"A*X + 5 * B", 
											data: [ { x:1, y: 1},{ x:8, y:25}], 
											borderWidth:3,
											showLine:true,
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
								display:true,
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
												{ 	display: true,
												type: "linear",
												ticks:
												{
													min:0, max: 100
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
					
					for (i=0; i<10; i++)
						{	
							myPoint ={}
							myPoint.x = i*1.0
							myPoint.y = (i-a)*(i-a) + b*10
							
							myData.push(myPoint)
							//console.log("i,a,b "+i+" " + a + " " + b + " " + myPoint.y)
							
						}
						
					for (i=0; i<10; i++)
						{	
							myPoint ={}
							myPoint.x = i*1.0
							myPoint.y = a*i+b *5
							
							myData2.push(myPoint)
							//console.log("i,a,b "+i+" " + a + " " + b + " " + myPoint.y)
							
						}	
				
				//	console.log("a, b" + a + " , " + b + " : " )
					ccc.data.datasets[0].data=myData
					ccc.data.datasets[1].data=myData2 
					ccc.update()
				}
				
	a=$("#val_a").val()
	b=$("#val_b").val()
					
	$("#numApples").text(6)
	$("#numBananas").text(4)			
	$("#set_b").text("4")
	$("#set_a").text("6")	

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
			  
			  $(".stuffDiv").removeClass("activeStuff")
			  $(".stuffDiv").addClass("inactiveStuff")
			  
			  $("#stuff" + tn).addClass("activeStuff")
			  $("#stuff" + tn).removeClass("inactiveStuff")
			  
			  if (tn==1)
				{$("#btnPrev").css("display","none")}
				else
				{$("#btnPrev").css("display","inline")}
			
			if(tn>=4)
			{$("#btnNext").css("display","none")}
			else 
			{$("#btnNext").css("display","inline")}
			}
			
			
			
					$("#slider").slider("value",2.2*tn)
					$("#val_a").val(""+(2.2*tn).toFixed(2)); makeChart()
			
			
			
	
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
		{if(currentTab <= 4)
			{
				tn=currentTab+1
				tt=$("#tab"+tn).eq(0)
				goTab(tt,tn)
			}
		}
