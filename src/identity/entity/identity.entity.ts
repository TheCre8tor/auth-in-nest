import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { nanoid } from 'nanoid';

@Entity()
class Identity {
  @PrimaryColumn({ unique: true })
  id: string;

  @Column('varchar', { nullable: false })
  firstname: string;

  @Column('varchar', { nullable: false })
  lastname: string;

  @Column('varchar')
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  is_deleted: boolean;

  @Column()
  is_email_verified: boolean;

  @Column()
  is_admin_user: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @BeforeInsert()
  generate() {
    this.id = nanoid();
  }
}

export default Identity;
