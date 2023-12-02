// src/config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/db.sqlite', // chemin vers le fichier de la base de données
});

export default sequelize;
