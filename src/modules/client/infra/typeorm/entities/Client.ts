import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Clients")
export class Client{
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name!: string;

    @Column()
    birth!: Date;

    @Column()
    age!: number;

    @Column()
    city!: string; 

    constructor(params:{
      name: string;
      birth: Date;
      age: number;
      city: string;  
    }){
        Object.assign(this, params);
    }
}