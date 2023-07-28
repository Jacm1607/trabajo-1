import { Entity, PrimaryGeneratedColumn, Column } from'typeorm'

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
}
