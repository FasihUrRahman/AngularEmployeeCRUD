export interface Employee{
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    joinedOn: Date | null;
    dateOfBirth: Date | null;
    age: number | null;
    address: string;
    country: string;
}