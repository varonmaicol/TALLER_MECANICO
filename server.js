import express from 'express';
import vehiclesRoutes from './src/routes/vehicles.routes.js';
import servicesRoutes from './src/routes/services.routes.js';
import repairsRoutes from './src/routes/repairs.routes.js';

const app = express();
app.use(express.json());

app.use('/api/vehicles', vehiclesRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/repairs', repairsRoutes);

app.listen(3000, () => {
  console.log('🚗 Servidor corriendo en http://localhost:3000');
});
