
var myclock;

function show5(){
var tmpDate = new Date();
var date = tmpDate.getDate();
var month= tmpDate.getMonth() + 1 ;
var year= tmpDate.getYear();

myclock = year;
myclock += "��";
myclock += month;
myclock += "��";
myclock += date;
myclock += "�� ";

myArray=new Array(6);
myArray[0]="������"
myArray[1]="����һ"
myArray[2]="���ڶ�"
myArray[3]="������"
myArray[4]="������"
myArray[5]="������"
myArray[6]="������"
weekday=tmpDate.getDay();
if (weekday==0 | weekday==6)
{
myclock += myArray[weekday];
}
else
{myclock += myArray[weekday];
};

 if (!document.layers&&!document.all)
 return
 var Digital=new Date()
 var hours=Digital.getHours()
 var minutes=Digital.getMinutes()
 var seconds=Digital.getSeconds()
 var dn="AM" 
 if (hours>12){
 dn="PM"
 hours=hours-12
 }
 if (hours==0)
 hours=12
 if (minutes<=9)
 minutes="0"+minutes
 if (seconds<=9)
 seconds="0"+seconds
//change font size here to your desire
myclock += " "+hours+":"+minutes+":"
 +seconds+" "+dn+""
if (document.layers){
document.layers.liveclock.document.write(myclock)
document.layers.liveclock.document.close()
}
else if (document.all)
liveclock.innerHTML=myclock
setTimeout("show5()",1000)
 }