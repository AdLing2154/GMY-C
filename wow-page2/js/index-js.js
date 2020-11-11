//let style=document.styleSheets[0];
//console.log(style)
//
function outDiv(){
if(document.getElementById("nav2").style.display!="block"){
			document.getElementById("nav2").style.display="block";
//			 nav.css('#nav2:after{display:block}');
			document.getElementById("jianjiao").style.display="block";
//			document.getElementsByTagName("body").style.filter=" brightness(30%)";
//document..style.filter=" brightness(50%)";
//document.getElementsByTagName("article")[0].style.filter=" brightness(50%)";
document.getElementsByClassName("content-ss")[0].style.filter=" brightness(50%)";
//		let value=document.getElementById("inputss").value;
//		value="游戏∧";
//		alert(value);
        document.getElementById("inputss").value="游戏∧";
	}
else if(document.getElementById("nav2").style.display!="none"){
			document.getElementById("nav2").style.display="none";
			document.getElementById("jianjiao").style.display="none";
//			document.getElementById("nav2").style.animationName=" mysese 1s forwards";
////			document.getElementById("nav2").style.animationDuration="2s";
//document.getElementById("nav2").style.
// let value=document.getElementById("inputss").value;
// 	value="游戏∨";
// 		alert(value);
	document.getElementsByClassName("content-ss")[0].style.filter=" brightness(100%)";
 document.getElementById("inputss").value="游戏∨";
 document.body.style.filter=" brightness(100%)";
	}
	 

}
function secondDiv(){
	if(document.getElementById("nav3").style.display!="block"){
			document.getElementById("nav3").style.display="block";
			document.getElementById("jianjiao233").style.display="block";
//document.body.style.filter=" brightness(50%)";
document.getElementsByClassName("content-ss")[0].style.filter=" brightness(50%)";
        document.getElementById("Secondinput").value="电子竞技∧";
	}
else if(document.getElementById("nav3").style.display!="none"){
			document.getElementById("nav3").style.display="none";
			document.getElementsByClassName("content-ss")[0].style.filter=" brightness(100%)";
			document.getElementById("jianjiao233").style.display="none";
 document.getElementById("Secondinput").value="电子竞技∨";
// document.body.style.filter=" brightness(100%)";
}
}


function thirdDiv(){
	if(document.getElementById("nav4").style.display!="block"){
			document.getElementById("nav4").style.display="block";
			document.getElementById("jianjiao486").style.display="block";
//document.body.style.filter=" brightness(50%)";
        document.getElementById("Thirdinput").value="电子竞技∧";
        document.getElementsByClassName("content-ss")[0].style.filter=" brightness(50%)";
	}
else if(document.getElementById("nav4").style.display!="none"){
			document.getElementById("nav4").style.display="none";
			document.getElementById("jianjiao486").style.display="none";
 document.getElementById("Thirdinput").value="我的账户∨";
	document.getElementsByClassName("content-ss")[0].style.filter=" brightness(100%)";
// document.body.style.filter=" brightness(100%)";
}
}