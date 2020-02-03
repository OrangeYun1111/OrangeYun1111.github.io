window.onload=function(){
	title.innerHTML="搜索网页";
	l1.style.backgroundColor="rgba(255,116,11,0.5)";
	form.action="http://www.baidu.com/s";
	text.name="wd";
}



function none(){
	l1.style.backgroundColor="";
	l2.style.backgroundColor="";
	l3.style.backgroundColor="";
	l4.style.backgroundColor="";
	l5.style.backgroundColor="";
	l6.style.backgroundColor="";
	l7.style.backgroundColor="";
}
function donghua(){
	sousuo.style.animation="mymove 2s";
	setTimeout(function(){sousuo.style.animation="";},2000);
}
function wangye(){
	donghua();
	title.innerHTML="搜索网页";
	none();
	l1.style.backgroundColor="rgba(255,116,11,0.5)";
	form.action="http://www.baidu.com/s";
	text.name="wd";
	form.htmlText="123";
}
function tupian(){
	donghua();
	title.innerHTML="搜索图片";
	none();
	l2.style.backgroundColor="rgba(255,116,11,0.5)";
}
function shipin(){
	donghua();
	title.innerHTML="搜索视频";
	none();
	l3.style.backgroundColor="rgba(255,116,11,0.5)";
}
function weizhi(){
	donghua();
	title.innerHTML="搜索位置";
	none();
	l4.style.backgroundColor="rgba(255,116,11,0.5)";
}
function yinyue(){
	donghua();
	title.innerHTML="搜索音乐";
	none();
	l5.style.backgroundColor="rgba(255,116,11,0.5)";
}
function wenzhang(){
	donghua();
	title.innerHTML="搜索文章";
	none();
	l6.style.backgroundColor="rgba(255,116,11,0.5)";
}
function fanyi(){
	donghua();
	title.innerHTML="搜索翻译";
	none();
	l7.style.backgroundColor="rgba(255,116,11,0.5)";
}