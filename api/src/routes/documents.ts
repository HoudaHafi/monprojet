// src/routes/documents.ts
import express, { Request, Response } from 'express';
import Document from '../models/Document';

const router = express.Router();

// API pour lister les documents avec pagination et filtre par type
router.get('/find', async (req: Request, res: Response) => {
  try {
    const { page = 1, documentType } = req.query;
    const limit = 10;
    const offset = (Number(page) - 1) * limit;

    const whereClause = documentType ? { type: documentType } : {};

    const documents = await Document.findAndCountAll({
      limit,
      offset,
      where: whereClause,
    });

    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API pour afficher un document par ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const document = await Document.findByPk(req.params.id);

    if (!document) {
      res.status(404).send('Document not found');
      return;
    }

    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API pour mettre à jour un document
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { name, type, description } = req.body;
    const document = await Document.findByPk(req.params.id);

    if (!document) {
      res.status(404).send('Document not found');
      return;
    }

    document.name = name;
    document.type = type;
    document.description = description;

    await document.save();

    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API pour supprimer un document
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const document = await Document.findByPk(req.params.id);

    if (!document) {
      res.status(404).send('Document not found');
      return;
    }

    await document.destroy();

    res.send('Document deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
