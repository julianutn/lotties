const ANIMATION_URL = "https://assets2.lottiefiles.com/packages/lf20_0ypqp25v.json";
let text = "Hello Youtube :-)";
let lottieData = null;
let nameInput = document.getElementById("name-input");

lottie.useWebWorker();


nameInput.addEventListener("input", () => {
  let name = nameInput.value;
  text = name;
  console.log("text : " + text);
  lottieData.animationData.layers[1].t.d.k[0].s.t = text;
  reloadAnimation();
});

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", ANIMATION_URL, false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function init () {
  var json_obj = JSON.parse(Get(ANIMATION_URL));

  lottieData = lottie.loadAnimation({
    container: document.getElementById("animation"),
    renderer: 'svg',
    animationData: json_obj,
    autoplay: true,
    loop: true
    });
  
    lottieData.animationData.layers[1].t.d.k[0].s.t = text;
  reloadAnimation();
}

function reloadAnimation() {
  if (lottieData) {
    lottieData.destroy();
    lottieData = lottie.loadAnimation({
      container: document.getElementById("animation"),
      renderer: 'svg',
      animationData: lottieData.animationData,
      autoplay: true,
      loop: true
    });
  }
}

/**
  Not needed
**/
function compareWithValueAndUpdate(data, oldFont, newFont) {
  if (data !== null) {
    if ( typeof data == "object" ) {
      Object.entries(data).forEach(([key, value]) => {
        if (value === oldFont) {
          data[key] = newFont;                    
          console.log("key : " + key);
          console.log("value : " + value); 
        }                  
        compareWithValueAndUpdate(value, oldFont, newFont);
      });
    }
  }
}

/**
  Not needed
**/
function compareWithKeyAndUpdate(data, keyVal, newVal) {
  if (data !== null) {
    if ( typeof data == "object" ) {
      Object.entries(data).forEach(([key, value]) => {
        if (key === keyVal) {
          data[key] = newVal;                    
          console.log("FOUND key value : " + key);
          console.log("FOUND value : " + value); 
        }                  
        compareWithKeyAndUpdate(value, keyVal, newVal);
      });
    }
  }
}

/**
  Not needed
**/
function replaceFont(oldFont, newFont) {
  if (lottieData) {
    console.log(lottieData);
    compareWithValueAndUpdate(lottieData.animationData, oldFont, newFont);
    console.log(lottieData.animationData);
    reloadAnimation();
  }
}

init();
// replaceFont("Avenir-Heavy", "Estonia");
// replaceFont("Avenir", "Estonia");
// replaceFont("Heavy", "cursive");
// compareWithKeyAndUpdate(lottieData.animationData, "fPath", "https://fonts.googleapis.com/css2?family=Estonia&display=swap");
// reloadAnimation();
// console.log(lottieData.animationData);
