function julias(z, k) {

  const i = new c(0, 1);
  const a = new c(k.x, 0);
  const b = new c(0, k.y);

  return {
    classic: {
      c: s(p(z, z), k),
      label: "classic Zn+1=Zn^2+k",
    },
    cube: {
      c: s(p(z, p(z, z)), k),
      label: "classic Zn+1=Zn^3+k",
    },
    poly: {
      c: s(s(complex_exp(z, 3), p(-3, p(complex_exp(a, 2), z))), b),
      label: "polynomial Zn+1=Zn^3-3a^2z+b",
    },
    cubebasin: {
      c: s( c(-0.090706,0.27145) , s( p(complex_exp(z,3),c(-1,0)) , p(complex_exp(z,2),c(2.41154,-0.133695)) ) ),
    },
    complexsin: {
      c: p(k, complex_sin(z)),
    },
  }
}
//f(z)=(−0.090706+0.27145i)+(2.41154−0.133695i)z2−z3
//-1.2-0.8i   2.7+0.8i
var dropdowns = {
  dd1: {
    id: "selectFunction",
    ext_label: "function",
    elements: {
      classic: {
        id: "classic",
        label: "classic: Zn+1=(Zn)^2+c",
        examples: {
          ex0: {
            id: "ex0",
            label: "-0.54 + 0.54i",
            val: "ex0",
            cx: -0.4,
            cy: 0.6,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            maxItr: 250,
            uBound: 4,
                      },
          ex1: {
            id: "ex1",
            label: "-0.4 + 0.6i (Caulibroccoli)",
            cx: -0.4,
            cy: 0.6,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            maxItr: 250,
            uBound: 4,
          },
          ex2: {
            id: "ex2",
            label: "0.285 + 0.01i",
            cx: 0.285,
            cy: 0.01,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            maxItr: 250,
            uBound: 4,
          },
          ex3: {
            id: "ex3",
            label: "0.45 + 0.1428i",
            cx: 0.45,
            cy: 0.1428,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            maxItr: 250,
            uBound: 4,
          },
          ex4: {
            id: "ex4",
            label: "-0.70176  -0.3842i",
            cx: -0.70176,
            cy: -0.3842,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            maxItr: 250,
            uBound: 4,
          },
          ex5: {
            id: "ex5",
            label: "-0.835 - 0.2321i (Dragon)",
            cx: -0.835,
            cy: -0.2321,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            maxItr: 250,
            uBound: 4,
          },//c = -0.2 + i
                  
        },
      },    
      cube: {
        id: "cube",
        label: "cube: Zn+1=(Zn)^3+c",
        examples:
           { 
           e1: {
            id: "e1", 
            label: "Cactus",
            cx: -0.54,
            cy: +0.54,
            maxItr: 250,
            uBound: 4,
          }
        },
      },
      poly: {
        id: "poly",
        label: "polynomial Zn+1=Zn^3-3a^2z+b",
        examples:
           { 
           e1: {
            id: "e1", 
            label: "bat #1",
            cx: 0.6,
            cy: -0.6,
            maxItr: 250,
            uBound: 4,
          },
          e2: {
            id: "e2", 
            label: "bat #2",
            cx: 0.64,
            cy: -0.64,
            maxItr: 250,
            uBound: 4,
          },
        },
      },
      cubebasin: {
        id: "cubebasin",
        label: "cubebasin (−0.090706+0.27145i)+(2.41154−0.133695i)z2−z3",
        examples: {
            e1:       {
            id: "e1",  
            label: "example",
            cx: 0,
            cy: 0,
            maxItr: 250,
            uBound: 4,
          },
        },
      },
      complexsin: {
        id: "complexsin",
        label: "complex sin Zn+1=c*sin(Zn)",
        examples: {
            e1:       {
            id: "e1",  
            label: "1+0.4i",
            cx: 1,
            cy: 0.4,
            maxItr: 500,
            uBound: 30,
          },
          e2:       {
            id: "e2",  
            label: "1+i",
            cx: 1,
            cy: 1,
            maxItr: 500,
            uBound: 30,
          },
          e3:       {
            id: "e3",  
            label: "3/2i",
            cx: 0,
            cy: 1.5,
            maxItr: 500,
            uBound: 30,
          },
          e4:       {
            id: "e4",  
            label: "0.984808 + 0.173648i",
            cx: 0.984808,
            cy: 0.173648,
            maxItr: 100,
            uBound: 30,
            },
            e5:       {
              id: "e5",  
              label: "-1.29904 + -0.75i",
              cx: -1.29904,
              cy: -0.75,
              maxItr: 100,
              uBound: 30,
              },
              e6: {
                id: "e6",
                label: "-0.2 + i",
                cx: -0.2,
                cy: 1,
                x0: -2,
                x1: 2,
                y0: -2,
                y1: 2,
                maxItr: 250,
                uBound: 30,
              },//c = 
              },
      },
    },
    selected: "classic",
  }
}

//c = 


//-------------------------------------------
//juliaExamples in use for classic julia only
var juliaExamples = {
  ex0: {
    label: "-0.54 + 0.54i",
    val: "ex0",
    cx: -0.4,
    cy: 0.6,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    maxItr: 250,
  },
  ex1: {
    label: "-0.4 + 0.6i",
    val: "ex1",
    cx: -0.4,
    cy: 0.6,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    maxItr: 250,
  },
  ex2: {
    label: "0.285 + 0.01i",
    val: "ex2",
    cx: 0.285,
    cy: 0.01,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    maxItr: 250,
  },
  ex3: {
    label: "0.45 + 0.1428i",
    val: "ex3",
    cx: 0.45,
    cy: 0.1428,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    maxItr: 250,
  },
  ex4: {
    label: "-0.70176  -0.3842i",
    val: "ex4",
    cx: -0.70176,
    cy: -0.3842,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    maxItr: 250,
  },
  ex5: {
    label: "-0.835 - 0.2321i",
    val: "ex5",
    cx: -0.835,
    cy: -0.2321,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    maxItr: 250,
  },
};
//-------------------------------------------------------------------
