import { Client } from "../../../../../modules/client/infra/typeorm/entities/Client";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Cities")
export class City{
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name!: string;

    @Column()
    state!: string;

    @OneToMany(() => Client, (client) => client.city)
    clients!: Client[];

    constructor(params:{
      name: string;
      state: string;  
    }){
        Object.assign(this, params);
    }
}