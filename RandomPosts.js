function FeaturedPostSide(a){(
function(e)
{var 
h={blogURL:"",MaxPost:4,idcontaint:"",ImageSize:100,interval:5000,autoplay:false,loadingClass:"loadingxx",pBlank:"http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};
h=e.extend({},h,a);
var g=e(h.idcontaint);
var d=h.MaxPost*200;
g.html('<div class="sliderx"><ul class="drdsr-feat-posts"></ul></div><div class="buttons"><a href="#" class="prevx">prev</a><a href="#" class="nextx">next</a></div>');
var f=function(w){
var q,k,m,u,x,p,t,v,r,l="",s=w.feed.entry;
for(var o=0;o<s.length;o++){
 console.log('E : '+ s[o].media$thumbnail!=null? s[o].media$thumbnail.url:"");
for(var n=0;n<s[o].link.length;n++){
  if(s[o].link[n].rel=="alternate"){
    q=s[o].link[n].href;
    break
  }
}
if("media$thumbnail" in s[o]){ 
  var ind = s[o].media$thumbnail.url.indexOf("http://res.cloudinary.com/staticcontenthost/image/upload/");
  if(ind >-1) {
    u=s[o].media$thumbnail.url.replace('http://res.cloudinary.com/staticcontenthost/image/upload/','http://res.cloudinary.com/staticcontenthost/image/upload/w_210,h_180,c_fill/');
  }else{
    u=s[o].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+h.ImageSize+"-c");
  }
}else
{
  u=h.pBlank.replace(/\/s[0-9]+(\-c|\/)/,"/s"+h.ImageSize+"$1");
}

k=s[o].title.$t;
at=k.replace("'","/'");
at=at.replace('"','/"');
r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;
x=r.substring(0,4);p=r.substring(5,7);
t=r.substring(8,10);
v=h.MonthNames[parseInt(p,10)-1];
l+='<li><a target="_blank" href="'+q+'"><div class="overlayx"></div><img alt="'+at+'" class="random" src="'+u+'" /><h4>'+k+'</h4></a><div class="label_text"><span class="date"><span class="dd">'+t+'</span> <span class="dm">'+v+'</span> <span class="dy">'+x+'</span></span> <span class="autname">'+m+"</span></div></li>"}e("ul",g).append(l).addClass(h.loadingClass)};
var c=function(){e(h.idcontaint+" .nextx").click()};var b=function(){e.get((h.blogURL===""?window.location.protocol+"//"+window.location.host:h.blogURL)+"/feeds/posts/summary"+(h.tagName===false?"":"/-/"+h.tagName)+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",f,"jsonp");setTimeout(function(){e(h.idcontaint+" .prevx").click(function(){e(h.idcontaint+" .sliderx li:first").before(e(h.idcontaint+" .sliderx li:last"));return false});e(h.idcontaint+" .nextx").click(function(){e(h.idcontaint+" .sliderx li:last").after(e(h.idcontaint+" .sliderx li:first"));return false});if(h.autoplay){var i=h.interval;var j=setInterval(c,i);e(h.idcontaint+" .sliderx li:first").before(e(h.idcontaint+" .sliderx li:last"));e(h.idcontaint+" .sliderx").hover(function(){clearInterval(j)},function(){j=setInterval(c,i)})}e("ul",g).removeClass(h.loadingClass)},d)};e(document).ready(b)})(jQuery)};
