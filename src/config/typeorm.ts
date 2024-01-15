import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { registerAs } from '@nestjs/config';

config();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: parseInt(`${process.env.DATABASE_PORT}`),
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: false,
};

export const typeorm = registerAs('database', () => {
  return { ...dataSourceOptions, autoLoadEntities: true };
});

export default new DataSource(dataSourceOptions as DataSourceOptions);
