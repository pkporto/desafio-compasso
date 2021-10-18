import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {City} from '../../../../city/infra/typeorm/entities/City'

@Entity("Clients")
export class Client{
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name!: string;

    @Column()
    birth!: string;

    @Column()
    age!: number;

    @Column()
    gender!: string;

    @ManyToOne(() => City, (city) => city.clients, {
      cascade: true,
    })
    @JoinColumn({ name: "city_id", referencedColumnName: "id" })
    city!: City;

    constructor(params:{
      name: string;
      birth: string;
      age?: number;
      city?: string;  
    }){
        Object.assign(this, params);
    }
}