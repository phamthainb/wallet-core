import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column()
  type: string; // deposit, transfer

  @Column()
  fee: number;

  @Column()
  request_amount: number;

  @Column()
  transfer_amount: number;

  @Column()
  status: string; // init, processing, fail, success

  @Column()
  note: string;
}

@Entity('user_transaction')
export class UserTransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @ManyToOne(() => TransactionEntity)
  transaction: TransactionEntity;

  @ManyToOne(() => UserEntity)
  from: UserEntity;

  @ManyToOne(() => UserEntity)
  target: UserEntity;
}
