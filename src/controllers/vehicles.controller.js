import { vehicles } from '../data/vehiclesData.js';

export const getVehicles = (req, res) => {
  res.json(vehicles);
};

export const getVehicleById = (req, res) => {
  const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));
  if (!vehicle) return res.status(404).json({ message: 'Vehículo no encontrado' });
  res.json(vehicle);
};

export const createVehicle = (req, res) => {
  const { plate, brand, model, year, ownerId } = req.body;
  if (!plate || !brand || !model || !year || !ownerId) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }
  const newVehicle = { id: vehicles.length + 1, plate, brand, model, year, ownerId };
  vehicles.push(newVehicle);
  res.status(201).json(newVehicle);
};

export const updateVehicle = (req, res) => {
  const { id } = req.params;
  const vehicle = vehicles.find(v => v.id === parseInt(id));
  if (!vehicle) return res.status(404).json({ message: 'Vehículo no encontrado' });

  const { plate, brand, model, year, ownerId } = req.body;
  vehicle.plate = plate || vehicle.plate;
  vehicle.brand = brand || vehicle.brand;
  vehicle.model = model || vehicle.model;
  vehicle.year = year || vehicle.year;
  vehicle.ownerId = ownerId || vehicle.ownerId;

  res.json(vehicle);
};

export const deleteVehicle = (req, res) => {
  const index = vehicles.findIndex(v => v.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Vehículo no encontrado' });
  vehicles.splice(index, 1);
  res.json({ message: 'Vehículo eliminado' });
};
