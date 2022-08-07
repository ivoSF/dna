// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function
const pAequorFactory = (num, dnaBase) => {
  return {
    specimenNum: num,
    dna: dnaBase,

    // mutate a random DNA base to another DNA base.
    mutate: function () {
      let randomBase = Math.floor(Math.random() * 15);
      let newBase = returnRandBase();
      while (dnaBase[randomBase] === newBase) {
        newBase = returnRandBase();
      }

      console.log(
        "the random BASE chosen is the " +
          (randomBase * 1 + 1) +
          "th BASE " +
          '"' +
          dnaBase[randomBase] +
          '"' +
          " it will be replaced with the BASE " +
          '"' +
          newBase +
          '"' +
          "."
      );

      return (dnaBase[randomBase] = newBase);
    },

    // compare 2 DNA samples and see the percentage they are indentical.
    compareDNA: function (otherStrand) {
      let newDNA = otherStrand.dna;
      console.log(newDNA);
      console.log(dnaBase);
      let countIndenticalBase = 0;

      for (let i = 0; i < dnaBase.length; i++) {
        if (dnaBase[i] === newDNA[i]) {
          countIndenticalBase += 1;
        }
      }
      console.log(
        `specimen ${this.specimenNum} and specimen ${
          otherStrand.specimenNum
        } have ${((100 / 15) * countIndenticalBase).toFixed(3)}% DNA in common`
      );
    },
    // checks if more then 60% of the bases are either "C" or "G"
    willLikelySurvive: function () {
      let countCG = 0;
      for (let i = 0; i < dnaBase.length; i++) {
        if (dnaBase[i] === "C" || dnaBase[i] === "G") {
          countCG += 1;
        }
      }
      return ((100 / 15) * countCG) > 60 ? true : false;
    },
  };
};

const first = pAequorFactory(1, mockUpStrand());
const second = pAequorFactory(2, mockUpStrand());



// make an array of 30 viable pAwquor`s.
const pAequorThirtyLikelyToSurvive = () => {
  let survivalArray = [];
  let num = 0;

  for (let i = 0; i < 30; i++) {
    let pushCheck = pAequorFactory(num, mockUpStrand());
    num++;

    if (pushCheck.willLikelySurvive() === true) {
      survivalArray.push(pushCheck);
    } else {
      i--;
    }
  }
  return survivalArray;
};

// console logs i used to test the functions.

console.log(pAequorThirtyLikelyToSurvive());



//console.log(pAeqyorFactory(1, mockUpStrand()));
//console.log(`the sample number is: ${second.specimenNum} \n`, second.dna);
//second.mutate();
//console.log(`the sample number is: ${second.specimenNum} \n`, second.dna);
//first.compareDNA(second);
//console.log(first.willLikelySurvive());
