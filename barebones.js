var jq = document.createElement('script');
jq.type = "text/javascript";
jq.async = true;
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(jq);
$( "head" ).empty();
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(jq);
var target = document.querySelectorAll('body');
Array.prototype.forEach.call(target, function(element){
    element.removeAttribute('style');
});
$("textarea").remove();
$("iframe").remove();
$("button").remove();
$("input").remove();
var ohtml = document.getElementsByTagName("body")[0].innerHTML;
$("body").html(ohtml.trim());
