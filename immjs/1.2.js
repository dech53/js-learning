(function(window){
    function hd(){
        console.log("1.2.js");
    }
    function show(){
        console.log("1.2.html");
    }
    window.second = {hd,show}
})(window)