interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    [otherOptions: string]: unknown
}

interface Directors extends Teacher {
    numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeach: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName[0]}. ${lastName}`;
}


interface StudentShape {
    firstName: string,
    lastName: string
}

interface StudentContractable {
    new(firstName: string, lastName: string): StudentShape;
}

class StudentClass implements StudentShape {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}