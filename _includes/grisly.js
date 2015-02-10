window.Q=function(fn) {setTimeout(fn,0);};
window.log=function(x) {console.log(x);};

function init() {
  var txtAdj=localStorage.getItem("txtAdj"),
      firstSpan=document.getElementById("firstGrisly"),
      prevSpan=firstSpan,
      mainSpan=document.getElementById("grisly"),
      grislies=["Horrid","Slimy","Weird","Dreadful","Grim","Kooky","Scandalous","Wild","Nasty","Lousy","Grisly"],
      spans=[],
      count=0,
      newSpan,
      whichTransitionEvent=function whichTransitionEvent() {
        var t,
            el=document.createElement('fakeelement'),
            transitions={
              'transition':'transitionend',
              'OTransition':'oTransitionEnd',
              'MozTransition':'transitionend',
              'WebkitTransition':'webkitTransitionEnd'
            };
        for (t in transitions) {
          if (el.style[t]!==undefined) {
            return transitions[t];
          }
        }
      },
      transitionEvent=whichTransitionEvent()||"transitionend",
      loadedGrisly,
      stickyElements=document.getElementsByClassName('sticky'),
      images=document.querySelectorAll('img[src^="/images"], img[src*="_posts"]');

  function picker(event) {
    function handler(e) {
      prevSpan.removeEventListener(transitionEvent, handler, false);
      prevSpan.parentNode.removeChild(prevSpan);
      localStorage.setItem("txtAdj", grislies[count]);
      if (count===grislies.length-1) {count=0;} else {count+=1;}
      Q(function() {
        prevSpan.className="grislies";
        prevSpan=newSpan;
      });
    }
    if (MOH.isHome) {
      event.preventDefault();
      newSpan=spans[count];
      mainSpan.appendChild(newSpan);
      prevSpan.className+=" posAbs";
      prevSpan.addEventListener(transitionEvent, handler, false);
      Q(function() {
        newSpan.className+=" grisly-slide-in";
        prevSpan.className+=" grisly-slide-out";
      });
    }
  }

  for (var i = 0; i < images.length; i++) {
    images[i].src= ~images[i].src.indexOf('_posts') ?
      "{{site.baseurl}}"+(images[i].src.replace(/.+_posts/g,'/images')) :
      "{{site.baseurl}}"+(images[i].src.replace('http://leeds-ebooks.github.io',''));
  }

  if (txtAdj) {firstSpan.innerHTML=txtAdj;}

  for (var i = 0; i < grislies.length; i++) {
    var span=document.createElement("span");
    span.innerHTML=grislies[i];
    span.className="grislies";
    spans.push(span);
  }

  loadedGrisly=grislies.indexOf(firstSpan.innerHTML);
  count=loadedGrisly===grislies.length-1 ?
    0 :
    loadedGrisly+1;

  for (var j=stickyElements.length-1;j>=0;j--) {
    Stickyfill.add(stickyElements[j]);
  }

  // document.querySelector(".site-title").addEventListener("tap", picker, false);
  document.querySelector(".site-title").addEventListener("click", picker, false);
  document.removeEventListener("DOMContentLoaded", init, false);
}
document.addEventListener('DOMContentLoaded', init, false);
