import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  PrimaryKey,
	Table,
  UpdatedAt
} from 'sequelize-typescript'

@Table({ tableName: 'Inventory' })
export class Inventory extends Model<Inventory> {
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
