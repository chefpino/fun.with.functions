var params = {
  x0: {
    val: -2,
    min: -10,
    max: 0,
    default: -2,
    label: "x0",
    minLabel: "-10",
    maxLabel: "0",
    recalc: true,
    integer: false,
    visible: true,
  },
  x1: {
    val: 2,
    min: 0,
    max: 10,
    default: 2,
    label: "x1",
    minLabel: "0",
    maxLabel: "10",
    recalc: true,
    integer: false,
    visible: true,
  },
  y0: {
    val: -2,
    min: -10,
    max: 0,
    default: -2,
    label: "y0",
    minLabel: "-10",
    maxLabel: "0",
    recalc: true,
    integer: false,
    visible: true,
  },
  y1: {
    val: 2,
    min: 0,
    max: 10,
    default: 2,
    label: "y1",
    minLabel: "0",
    maxLabel: "10",
    recalc: true,
    integer: false,
    visible: true,
  },
  zFact: {
    val: 1,
    min: 0.1,
    max: 1,
    default: 1,
    label: "z factor",
    minLabel: ".1",
    maxLabel: "1",
    recalc: true,
    visible: true,
    integer: false,
    steps: 9
  },
  funcRes: {
    val: 30,
    min: 10,
    max: 100,
    default: 30,
    label: "function resolution",
    minLabel: "10",
    maxLabel: "100",
    integer: true,
    recalc: true,
    visible: true
  },
  gridRes: {
    val: 10,
    min: 10,
    max: 100,
    default: 10,
    label: "grid resolution",
    minLabel: "10",
    maxLabel: "100",
    integer: true,
    recalc: true,
    visible: true
  },
  funcOpacity: {
    val: 0.2,
    min: 0,
    max: 1,
    steps: 10,
    default: 0.2,
    label: "opacity",
    minLabel: "transparent",
    maxLabel: "opaque",
    integer: false,
    recalc: true,
    visible: true
  },
  scaleFactor: {
    val: .4,
    min: 0,
    max: 2,
    steps: 10,
    default: .4,
    label: "zoom",
    minLabel: "far",
    maxLabel: "close",
    integer: false,
    recalc: true,
    visible: true
  },
  xyAngle: {
    val: -2.8,
    min: -Math.PI,
    max: Math.PI,
    default: -2.8,
    label: "x,y rotation",
    minLabel: "-π",
    maxLabel: "+π",
    recalc: true,
    integer: false,
    visible: true,
  },
  zyAngle: {
    val: -0.314,
    min: -Math.PI,
    max: Math.PI,
    default: -0.314,
    label: "y,z rotation",
    minLabel: "-π",
    maxLabel: "+π",
    recalc: true,
    integer: false,
    visible: true,
  },
  zxAngle: {
    val: 0,
    min: -Math.PI,
    max: Math.PI,
    default: 0,
    label: "x,z rotation",
    minLabel: "-π",
    maxLabel: "+π",
    recalc: true,
    integer: false,
    visible: true,
  },  
 
  functions: {
    f1: "Math.sin(x*x+y*y)",
    visible: false,
  },
  goButton: {
    show: false,
    visible: false,
  }

};

