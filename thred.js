function getScriptPath(foo){ return window.URL.createObjectURL(new Blob([foo.toString().match(/^\s*function\s*\(\s*\)\s*\{(([\s\S](?!\}$))*[\s\S])/)[1]],{type:'text/javascript'})); }

var MAX_VALUE = 10000;


var worker1 = new Worker(getScriptPath(function(){
    self.addEventListener('Adela1', function(e) {
        var value = 0;
        while(value <= e.data){
            self.postMessage(value);
            value++;
        }
    }, false);
}));

worker1.addEventListener('Adela2', function(e) {
  document.getElementById("result1").innerHTML = e.data;
}, false);



var worker2 = new Worker(getScriptPath(function(){
    self.addEventListener('Adela3', function(e) {
        var value = 0;
        while(value <= e.data){
            self.postMessage(value);
            value++;
        }
    }, false);
}));
worker2.addEventListener('Adela4', function(e) {
  document.getElementById("result2").innerHTML = e.data;
}, false);



var worker3 = new Worker(getScriptPath(function(){
    self.addEventListener('Adela5', function(e) {
        var value = 0;
        while(value <= e.data){
            self.postMessage(value);
            value++;
        }
    }, false);
}));
worker3.addEventListener('Adela6', function(e) {
    document.getElementById("result3").innerHTML = e.data;
}, false);
worker1.postMessage(MAX_VALUE); 
worker2.postMessage(MAX_VALUE); 
worker3.postMessage(MAX_VALUE);
 