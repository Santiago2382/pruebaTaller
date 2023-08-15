import { studentsViewList } from "../view/viewStudents.js";
import { students } from "../model/modelStudents.js";
import { insertTitleList } from "../view/viewStudents.js";

const buttonCall = document.getElementById("btnListar");

const getListStudents = (students) => {
    let datos = [];
    for (let s of students){
        let datosTemplate = `Nombres: ${s.name}, Apellidos: ${s.lastName}, Edad: ${s.age}`;
        datos.push(datosTemplate);
    }
    return datos;
}

buttonCall.addEventListener("click", () => {
    const response = getListStudents(students);
    studentsViewList(response);
    insertTitleList();  
});