/*
 * Wszystkie wzory bazują na wzorach Roberta Pennera
 * (http://robertpenner.com/easing/) i zachowują klasyczne
 * nazewnictwo.
 */

// Typy easingu
//
// Schemat nazewnictwa jest prosty:
// słowo „ease”, następnie
// albo „In” (zwolnienie na początku)
// albo „Out” (zwolnienie na końcu)
// albo „InOut” (zwolnienie i na początku i na końcu)
// następnie nazwa funkcji (Quad, Quart, Cubic itd.)
const easeInQuad = (t, d) => {
  return (t/=d)*t
}

const easeOutQuad = (t, d) => {
  return -(t/=d)*(t-2)
}

const easeInOutQuad = (t, d) => {
  return ((t/=d/2) < 1) ? 1/2*t*t : -1/2 * ((-t)*(t-2) - 1)
}

const easeInCubic = (t, d) => {
  return (t/=d)*t*t
}

const easeOutCubic = (t, d) => {
  return ((t=t/d-1)*t*t + 1)
}

const easeInOutCubic = (t, d) => {
  return ((t/=d/2) < 1) ? 1/2*t*t*t : 1/2*((t-=2)*t*t + 2)
}

const easeInQuart = (t, d) => {
  return (t/=d)*t*t*t
}

const easeOutQuart = (t, d) => {
  return -((t=t/d-1)*t*t*t - 1)
}

const easeInOutQuart = (t, d) => {
  return ((t/=d/2) < 1) ? 1/2*t*t*t*t : -1/2 * ((t-=2)*t*t*t - 2)
}

const easeInQuint = (t, d) => {
  return (t/=d)*t*t*t*t
}

const easeOutQuint = (t, d) => {
  return ((t=t/d-1)*t*t*t*t + 1)
}

const easeInOutQuint = (t, d) => {
  return ((t/=d/2) < 1) ? 1/2*t*t*t*t*t : 1/2*((t-=2)*t*t*t*t + 2)
}

const easeInSine = (t, d) => {
  return -Math.cos(t/d * (Math.PI/2))
}

const easeOutSine = (t, d) => {
  return Math.sin(t/d * (Math.PI/2))
}

const easeInOutSine = (t, d) => {
  return -1/2 * (Math.cos(Math.PI*t/d) - 1)
}

const easeInExpo = (t, d) => {
  return (t==0) ? 1 : Math.pow(2, 10 * (t/d - 1))
}

const easeOutExpo = (t, d) => {
  return (t==d) ? 1 : (-Math.pow(2, -10 * t/d) + 1)
}

const easeInOutExpo = (t, d) => {
  if (t==0) return 0
  if (t==d) return 1
  if ((t/=d/2) < 1) return 1/2 * Math.pow(2, 10 * (t - 1))
  return 1/2 * (-Math.pow(2, -10 * -t) + 2)
}

const easeInCirc = (t, d) => {
  return -(Math.sqrt(1 - (t/=d)*t) - 1)
}

const easeOutCirc = (t, d) => {
  return Math.sqrt(1 - (t=t/d-1)*t)
}

const easeInOutCirc = (t, d) => {
  return ((t/=d/2) < 1) ? -1/2 * (Math.sqrt(1 - t*t) - 1) :
    1/2 * (Math.sqrt(1 - (t-=2)*t) + 1)
}

const easeInBack = (t, d, s) => {
  return (s == undefined) ? s = 1.70158 : (t/=d)*t*((s+1)*t - s)
}

const easeOutBack = (t, d, s) => {
  return (s == undefined) ? s = 1.70158 : ((t=t/d-1)*t*((s+1)*t + s) + 1)
}

const easeInOutBack = (t, d, s) => {
  if (s == undefined) s = 1.70158
  if ((t/=d/2) < 1) return 1/2*(t*t*(((s*=(1.525))+1)*t - s))
  return 1/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2)
}

const easeInBounce = (t, d) => {
  return 1 - Easing.easeOutBounce (d-t, d)
}

const easeOutBounce = (t, d) => {
  if ((t/=d) < (1/2.75)) {
    return (7.5625*t*t)
  } else if (t < (2/2.75)) {
    return (7.5625*(t-=(1.5/2.75))*t + .75)
  } else if (t < (2.5/2.75)) {
    return (7.5625*(t-=(2.25/2.75))*t + .9375)
  } else {
    return (7.5625*(t-=(2.625/2.75))*t + .984375)
  }
}

const easeInOutBounce = (t, d) => {
  return (t < d/2) ? Easing.easeInBounce (t*2, d) * .5 :
    Easing.easeOutBounce (t*2-d, d) * .5 + .5
}

// Dwie pierwsze metowy zwracają wartość w podanym momencie trwania animacji.
// get() zwraca wartość niecałkowitą, a getRound() zwraca zaokrągloną wartość do najbliższej liczby całkowitej.
//
// type = typ easingu (easeInQuad, easeInOutQuart, easeOutExpo itd.)
// start = wartość początkowa
// end = wartość końcowa
// t = aktualny moment w animacji (zazwyczaj czas, ale może być też numer klatki)
// d = całkowity czas animacji (w tych samych jednostkach co parametr „t”)
//
// s (opcjonalny): o ile wartość ma przekroczyć wartość maksymalną przy Back
//
export default function (type, start, end, t, d, s) {
  return start+(Easing[type](Math.min(t,d),d,s)*(end-start))
}
