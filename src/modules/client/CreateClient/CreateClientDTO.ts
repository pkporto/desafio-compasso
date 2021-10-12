type genderOptions = 'M' | 'F' | 'O';

export interface ICreateClientDTO {
    name: string;
    gender: genderOptions;
    birth: Date;
    city: string;
}