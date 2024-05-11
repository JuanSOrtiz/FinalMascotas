import { Pet } from "src/pet/entities/pet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shelter {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Pet, (pet) => pet.specie)
    pets: Pet[]

}