function init() {
  var txtAdj=localStorage.getItem("txtAdj"),
      firstSpan=document.getElementById("firstGrisly"),
      mainSpan=document.getElementById("grisly"),
      grislies=["Horrid","Slimy","Weird","Dreadful","Grim","Kooky","Scandalous","Wild","Nasty","Lousy","Grisly"],
      spans=[],
      count=0,
      prevSpan=document.getElementById("firstGrisly"),
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
      transitionEvent=whichTransitionEvent(),
      loadedGrisly;

  function picker(event) {
    event.preventDefault();
    newSpan=spans[count];
    mainSpan.appendChild(newSpan);
    prevSpan.className+=" posAbs";

    if (transitionEvent) {
      prevSpan.addEventListener(transitionEvent, function(e) {
        prevSpan.parentNode.removeChild(prevSpan);
        prevSpan.className="grislies";
        setTimeout(function() {
          prevSpan=newSpan;
          localStorage.setItem("txtAdj", grislies[count]);
          if (count===grislies.length-1) {count=0;} else {count+=1;}
        },0);
      });
    }

    setTimeout(function() {
      newSpan.className+=" grisly-slide-in";
      prevSpan.className+=" grisly-slide-out";
    }, 0);
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

  document.querySelector(".site-title").addEventListener("click", picker, false);
  document.removeEventListener("DOMContentLoaded", init, false);
}
document.addEventListener('DOMContentLoaded', init, false);
