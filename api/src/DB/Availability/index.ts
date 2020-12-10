import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  PrimaryKey,
	Table,
  UpdatedAt
} from 'sequelize-typescript'

@Table({ tableName: 'Availability' })
export class Availability extends Model<Availability> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number

  @Column
  name: string

	@Column
  asdf: string

  @Column
  address: string

  @DeletedAt
  deleted_at: string

  @CreatedAt
  created_at: string

  @UpdatedAt
  updated_at: string
}
