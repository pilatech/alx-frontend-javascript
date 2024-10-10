interface MajorCredits {
    credits: number,
    _brand: 'MJ'
}

interface MinorCredits {
    credits: number,
    _brand: 'MN'
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
    return (subject1 + subject2) as unknown as MajorCredits;
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
    return (subject1 + subject2) as unknown as MinorCredits;
}