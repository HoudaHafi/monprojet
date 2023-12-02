import { Model } from 'sequelize';
declare class Document extends Model {
    id: string;
    name: string;
    type: 'PDF' | 'TXT' | 'XDOC';
    description: string;
}
export default Document;
