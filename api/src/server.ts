// src/server.ts
import express from 'express';
import sequelize from './config/database';
import documentRouter from './routes/documents';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Définir les routes
app.use('/api/documents', documentRouter);

// Synchroniser la base de données et démarrer le serveur
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
