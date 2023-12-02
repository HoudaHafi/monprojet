"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/documents.ts
const express_1 = __importDefault(require("express"));
const Document_1 = __importDefault(require("../models/Document"));
const router = express_1.default.Router();
// API pour lister les documents avec pagination et filtre par type
router.get('/find', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, documentType } = req.query;
        const limit = 10;
        const offset = (Number(page) - 1) * limit;
        const whereClause = documentType ? { type: documentType } : {};
        const documents = yield Document_1.default.findAndCountAll({
            limit,
            offset,
            where: whereClause,
        });
        res.json(documents);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
// API pour afficher un document par ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield Document_1.default.findByPk(req.params.id);
        if (!document) {
            res.status(404).send('Document not found');
            return;
        }
        res.json(document);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
// API pour mettre à jour un document
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type, description } = req.body;
        const document = yield Document_1.default.findByPk(req.params.id);
        if (!document) {
            res.status(404).send('Document not found');
            return;
        }
        document.name = name;
        document.type = type;
        document.description = description;
        yield document.save();
        res.json(document);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
// API pour supprimer un document
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield Document_1.default.findByPk(req.params.id);
        if (!document) {
            res.status(404).send('Document not found');
            return;
        }
        yield document.destroy();
        res.send('Document deleted successfully');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
exports.default = router;
