import express from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();

app.use(express.json());
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
