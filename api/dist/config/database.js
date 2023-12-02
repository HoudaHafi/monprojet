"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/config/database.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './src/db.sqlite', // chemin vers le fichier de la base de données
});
exports.default = sequelize;
