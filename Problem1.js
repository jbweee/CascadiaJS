var mapSkills = function(array) {
  //instantiate skills object
  //iterate through array 
    //iterate through skills
      //if skill exists in skills object
        //push name to that skill key
      //else make new key with value of [name]
  //return skills object
  let skills = {};
  let currSkills;
  let singleSkill;
  for (let i = 0; i < array.length; i++) {
    personSkills = array[i].skills;
    for (let j = 0; j < personSkills.length; j++) {
      singleSkill = personSkills[j];
      if (skills[singleSkill]) {
        skills[singleSkill].push(array[i].name);
      } else {
        skills[singleSkill] = [array[i].name];
      }
    }
  }
  return skills;
}

const people = [
  {
    id: 0,
    name: "John",
    skills: ["javascript", "html", "css", "c#"]
  },
  {
    id: 1,
    name: "Brian",
    skills: ["javascript", "java", "c", "c#", "c++", "html"]
  },
  {
    id: 2,
    name: "Michael",
    skills: ["c", "c++", "go", "rust"]
  }
];

console.log(mapSkills(people));
