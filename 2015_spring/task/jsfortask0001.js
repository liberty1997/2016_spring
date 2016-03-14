function click1()
{
alert("^_^ 第一次成功调用函数");
}
function myqq()
{
	var myoicq = 969829149;
	alert("What do you want ?");
	alert("我的QQ："+myoicq);
}
function dove()
{
	var mymessage=confirm("Do you love me ?");
	if(mymessage==true)
	{
		alert("Well done!!!");
	}
	else{
		alert("You lying son of a bitch !");
	}
}

function userage()
{
	var yourage;
	yourage = prompt("请输入你的周岁年龄")
	if(yourage<14&&yourage>=0)
	{alert("图样图森破，请立刻关闭本网页");}
else if(yourage>=14&&yourage<50)
{alert("老司机好，请问几楼开车？");}
else if(yourage>=50&&yourage<=100)
{alert("You are a hundred!");}
else
{alert("你太老了，出门右转吧！~");}
}
function windowopen1(){
window.open('http://www.hao123.com','_blank','width=600,height=400,top=200px,left=50px,menubar=yes,toolbar=yes,scrollbars=yes,status=yes')	
}