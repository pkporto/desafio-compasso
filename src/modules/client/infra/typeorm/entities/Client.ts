import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {City} from '../../../../city/infra/typeorm/entities/City'

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

    @ManyToOne(() => City, (city) => city.clients, {
      cascade: true,
    })
    @JoinColumn({ name: "city_id", referencedColumnName: "id" })
    city!: City;

    constructor(params:{
      name: string;
      birth: Date;
      age?: number;
      city?: string;  
    }){
        Object.assign(this, params);
    }
}