/* 
ให้เขียน Function ที่ชื่อว่า showStudentsData ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ studentInfo
        1. studentInfo เป็น Array ของ Object ที่บรรจุรายชื่อนักเรียน โดย Object แต่ละอันจะมี Key 4 ตัวได้แก่  name , age,  classNumber, favoriteSubject
    - Function นี้จะเข้าถึงข้อมูลใน studentInfo แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ดังนี้
*/

// Start coding here
function showStudentsData(studentInfo){
  let result = "";

  for (let student of studentInfo){
    // console.log('สิ่งที่จะออกมาคือ', student)
    for (let key in student){
      result += `${key}: ${student[key]} \n`
    }
    result += `-------------------\n`
  }
  return result;
}

const studentsInfo = [
  { name: "Alice", age: 14, classNumber: 8, favoriteSubject: "Math" },
  { name: "Charlie", age: 15, classNumber: 9, favoriteSubject: "History" },
  { name: "Ethan", age: 13, classNumber: 7, favoriteSubject: "Art" },
];

console.log(showStudentsData(studentsInfo));

/*
  name: Alice 
  age: 14 
  classNumber: 8 
  favoriteSubject: Math 
  -------------------
  name: Charlie 
  age: 15 
  classNumber: 9 
  favoriteSubject: History 
  -------------------
  name: Ethan 
  age: 13 
  classNumber: 7 
  favoriteSubject: Art 
  -------------------
  */
