// Easy
function exerciseOfTheDay() {
    let todayExercise = ""; 
  
    return function(exerciseName) {
      if (exerciseName) {
        todayExercise = exerciseName; 
      }
      
    console.log("Today's exercise:", todayExercise);
    };
  }
  const setExercise = exerciseOfTheDay();
  setExercise("playing soccer"); 
  
  // Medium
  function calculateSlicesPerPerson(totalSlices, totalPeople) {
  
    const slicesPerPerson = totalSlices / totalPeople;
    const formattedSlices = slicesPerPerson.toFixed(2);
  
    return `Each person gets ${formattedSlices} slices of pizza; from our ${totalSlices}-slice pizza.`;
  }
  
  console.log(calculateSlicesPerPerson(8, 4));
  
  // Hard
  function createPII(name, ssn) {
  
    const PII = {
      name: name,
      SSN: ssn
    };
  
    function getName() {
      return PII.name;
    }
  
    return {
      getName: getName
    };
  }
  
  const personInfo = createPII("Richard Huynh", "704-444-4444");
  
  console.log("Name:", personInfo.getName()); 
  console.log("SSN:", personInfo.SSN);
  
  // Very Hard
  
  class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
  
    exercise() {
      console.log("Running is fun! - said no one ever");
    }
  
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true; 
    }
  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
  
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }
  
    listLanguages() {
      console.log(`${this.name} knows ${this.languages.join(', ')}.`);
    }
  }
  
  
  const programmer1 = new Programmer("Richard", "Front-end Developer", 26, ["JavaScript", "HTML", "CSS"]);
  programmer1.exercise(); 
  programmer1.fetchJob(); 
  programmer1.completeTask();
  programmer1.offerNewTask(); 
  programmer1.learnLanguage("Python");
  programmer1.listLanguages(); 
  
  const programmer2 = new Programmer("NotRichard", "Back-end Developer", 24, ["Java", "C++"]);
  programmer2.fetchJob(); 
  programmer2.offerNewTask(); 
  