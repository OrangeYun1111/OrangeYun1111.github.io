function cx(){
	document.getElementById("imger").style.display="none";
	document.getElementById("cx").style.backgroundColor="white";
	document.getElementById("bm").style.backgroundColor="lightgray";
	document.getElementById("div1").style.display="";
	document.getElementById("div2").style.display="";
	document.getElementById("buttoner").style.display="";
}
function bm(){
	document.getElementById("cx").style.backgroundColor="lightgray";
	document.getElementById("bm").style.backgroundColor="white";
	document.getElementById("div1").style.display="none";
	document.getElementById("div2").style.display="none";
	document.getElementById("buttoner").style.display="none";
	document.getElementById("imger").style.display="inline";
}
function bu(){
	var name=document.getElementById("name").value;
	if(name=="张万利"){
		window.location.href = 'dems/zwl.html';
	}
	else{
		alert("身份证号或者密码有误,请重新填写!");
		document.getElementById("ider").value="";
		document.getElementById("name").value="";
	}
}
