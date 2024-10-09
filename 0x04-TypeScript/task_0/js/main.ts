interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Donald',
    lastName: 'Alexis',
    age: 27,
    location: 'Atlantis'
}

const student2: Student = {
    firstName: 'Reuben',
    lastName: 'Doe',
    age: 33,
    location: 'Pandorra'
}

const studentsList = [student1, student2];

let table = `<table>`;
studentsList.forEach(student => {
    table += `<tr>
        <td>${student.firstName}</td>
        <td>${student.location}</td>
    </tr>`
})
    
table += `</table>`
document.body.innerHTML += table;
