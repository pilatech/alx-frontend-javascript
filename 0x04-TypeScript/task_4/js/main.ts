export const cpp = Subjects.Cpp;
export const java = Subjects.Java;
export const react = Subjects.React;
const cSubject = new Subjects.Cpp();
const theTeacher = cSubject.teacher;
theTeacher.experienceTeachingC = 10;
export const cTeacher = theTeacher;

console.log('C++');
cSubject.teacher = cTeacher;
console.log(cSubject.getRequirements());
console.log(cSubject.getAvailableTeacher());

const javaSubject = new Subjects.Java();
console.log('Java');
javaSubject.teacher = cTeacher;
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

const reactSubject = new Subjects.React();
console.log('React');
reactSubject.teacher = cTeacher;
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
