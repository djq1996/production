function getClass(className) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className);
    }
    else {
        var All = document.getElementsByTagName('*');
        var arr = [];
        for (var i = 0; i < All.length; i++) {
            if (All[i].className == className) {
                arr.push(All[i])
            }
 
 
        }
        return arr;
    }
}
window.onresize = function(){
	location.reload()
}

