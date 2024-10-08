function gradeUpdateIndex(grades, studentId) {
  let indexAt = -1;
  grades.forEach((grade, index) => {
    if (grade.studentId === studentId) {
      indexAt = index;
    }
  });
  return indexAt;
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  const changedGrades = cityStudents.map((student) => {
    const index = gradeUpdateIndex(newGrades, student.id);
    if (index >= 0) {
      return {
        ...student,
        grade: newGrades[index].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
  return changedGrades;
}
