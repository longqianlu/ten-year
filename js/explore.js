/**
 * Created by web on 2018/11/2.
 */
var as=document.querySelector(
    "#tab>li>[data-toggle=tab]"
);
for(var a of as){
    a.onclick=function(){
        var a=this;
        var id=a.getAttribute("data-id");//ty-tab1
        var div=document.querySelector(id);
        var divs=document.querySelectorAll("#ty-tab-content>div");
        for(var d of divs){
            d.style.zIndex="";
        }
            d.style.zIndex=10;
    }
}


