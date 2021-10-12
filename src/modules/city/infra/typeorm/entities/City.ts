import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Clients")
export class Client{
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name!: string;

    @Column()
    state!: string;

    constructor(params:{
      name: string;
      state: string;  
    }){
        Object.assign(this, params);
    }
}