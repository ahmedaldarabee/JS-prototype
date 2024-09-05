class Name{
  constructor(name,id){
    this.id = id;
    this.name = name;
  }
  
  showName(){
    return `hello ${this.name} in this app`
  }
  
}

const nameObj = new Name("Ahmed",45);

// to show every think related to class : Name
console.log(Name.prototype)

// to create function and added to the class : Name by prototype
Name.prototype.showID = function(){
  return `Is your id :  ${this.id}`
}

// to create vars and added to the class : Name by prototype
Object.prototype.newChanges = "new changes by prototype";
