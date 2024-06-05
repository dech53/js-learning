(function(window){
    function hd(){
        console.log("1.1.js");
    }
    function show(){
        console.log("1.1.html");
    }
    window.first = {hd,show}
})(window)