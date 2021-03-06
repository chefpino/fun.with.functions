/*
var initAngle=pi/2;      //trunk angle
var dAngle=pi/8;         //half of bifurcation angle, pi/8 nice
var initLen=150;         //trunk length max 150
var minLen=30;           //20, 25 nice
var reduction=0.8;       //0.8 nice
var initTrunk=20;        //trunk initial thickness
var trunkReduction=0.5;  //trunk => tree reduction factor 
var minBranch=0.1;       // branches min thickness
*/

var params = {
  "initAngle":{
     val:Math.PI/2,
     min:0,
     max:Math.PI,
     default:Math.PI/2,
     label:"trunk angle",
     minLabel:"0",
     maxLabel:"&pi;",
     visible: true,
     cssClass: "control1",
    },
   "initLen":{
     val:130,
     min:25,
     max:150,
     default:130,
     label:"trunk initial height",
     minLabel:"25",
     maxLabel:"150",
     integer: true,
     visible: true,
     cssClass: "control1",
    },
     "initTrunk":{
      val:20,
      min:1,
      max:50,
      default:20,
      label:"trunk initial thickness",
      minLabel:"1",
      maxLabel:"50",
      integer: true,
      visible: true,
      cssClass: "control1",
    },
    "trunkReduction":{
      val:0.5, 
      min:0.1,
      max:0.9,
      default:0.5,
      label:"trunk to branch thickness",
      minLabel:"0.1",
      maxLabel:"0.9",
      visible: true,
      cssClass: "control1",
    },


     "dAngle":{
      val:Math.PI/8,
      min:Math.PI/8,
      max:Math.PI/4,
      default:Math.PI/8,
      label:"branch angle",
      minLabel:"&pi;/8",
      maxLabel:"&pi;/4",
      visible: true,
      cssClass: "control2",
    },
    "minLen":{
     val:20,
     min:15,
     max:40,
     default:20,
     label:"branch min length",
     minLabel:"15",
     maxLabel:"40",
     integer: true,
     visible: true,
     cssClass: "control2",
    },
   "reduction":{
     val:0.8,
     min:0.5,
     max:0.8,
     default:0.8,
     label:"branch length factor",
     minLabel:"0.5",
     maxLabel:"0.8",
     visible: true,
     cssClass: "control2",
    },

   "minBranch":{
     val:0.1,
     min:0.1,
     max:1,
     default:0.1,
     label:"branch min thickness",
     minLabel:"0.1",
     maxLabel:"1",
     visible: true,
     cssClass: "control2",
    },
     
   "nTrees":{
     val:1,
     min:1,
     max:10,
     default:1,
     label:"# trees",
     minLabel:"1",
     maxLabel:"10 (forest)",
     integer: true,
     visible: true,
     cssClass: "control1",
    },
     
    goButton: {
      show: true,
      visible: false,
    },
    bookmarkLink: {
      show: true,
      visible: false,
    }
  
}
