import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({ ...config.db });