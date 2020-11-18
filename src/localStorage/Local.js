class Local {
 constructor(name){
  this.name = name;
 }
 static get Data(){
  let str = localStorage.getItem(this.name)
  return JSON.parse(str)
 } 
 static set Data(obj){
  localStorage.setItem(this.name, JSON.stringify(obj))
 }
}

export class LocalField extends Local {
 constructor(name){
  super(name);
  this.name = 'Field';
 }
}
export class LocalWelcome extends Local {
 constructor(name){
  super(name);
  this.name = 'DataWelcome';
 }
}

export class LocalCount extends Local{
 constructor(name){
  super(name);
  this.name = 'DataGame';
 }
}

export class LocalDisabled extends Local{
 constructor(name){
  super(name);
  this.name = 'DataGame';
 }
}


