// src/models/Document.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Document extends Model {
  public id!: string;
  public name!: string;
  public type!: 'PDF' | 'TXT' | 'XDOC';
  public description!: string;
}

Document.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('PDF', 'TXT', 'XDOC'),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'documents',
  }
);

export default Document;
