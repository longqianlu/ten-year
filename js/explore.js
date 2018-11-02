/**
 * Created by web on 2018/11/2.
 */
$().click(function(){
    var i=1;
    return function(){
        console.log("赞+"+i++);
    }
})


