/*
fade-on-scroll.js
Autho: Kim Eskilsson 
Created: October 2018
*/

function setAlpha(alpha) {
$("nav").css("background-color", "rgba(0,0,0," + alpha + ")");
}

function calcAlpha() {
  //Definera variabel för alfa-värdet.
  let alpha = 0;
  //Definiera en variabel för hur långt det är till toppen av HTML dokumentet
  let scroll = $(document).scrollTop();
  // vid vilken pixel ska toning starta
  const fadeStart = 100;

  // vid vilken pixel ska toningen sluta
  const fadeStop = 200;

  //hur långt är det mellan start och stop
  const fadeLength = fadeStop - fadeStart;

  // vi har tre cases, mellan 0 och fadeStart, mellan fadeStart och fadeStop, samt från fadeStop till oändligheten(och vidare)
  if (scroll < fadeStart) {
    alpha = 0;
  } else if (scroll < fadeStop){
    alpha = (scroll - fadeStart) / fadeLength;
  } else {
    alpha = 1;
  }
  //returnera  vad alpha nu har blivit efter vår uträkning
  return alpha;
}

//När dokumentet scrollar, kör setAlpha-funktionen med värdet från calcAlpha
$(document).scroll(function() {
  setAlpha(calcAlpha());

});


