import { repairs } from '../data/repairsData.js';

export const getRepairs = (req, res) => {
  res.json(repairs);
};

export const getRepairById = (req, res) => {
  const repair = repairs.find(r => r.id === parseInt(req.params.id));
  if (!repair) return res.status(404).json({ message: 'Reparación no encontrada' });
  res.json(repair);
};

export const createRepair = (req, res) => {
  const { vehicleId, serviceId, date, status } = req.body;
  if (!vehicleId || !serviceId || !date || !status) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }
  const newRepair = { id: repairs.length + 1, vehicleId, serviceId, date, status };
  repairs.push(newRepair);
  res.status(201).json(newRepair);
};

export const updateRepair = (req, res) => {
  const repair = repairs.find(r => r.id === parseInt(req.params.id));
  if (!repair) return res.status(404).json({ message: 'Reparación no encontrada' });

  const { vehicleId, serviceId, date, status } = req.body;
  repair.vehicleId = vehicleId || repair.vehicleId;
  repair.serviceId = serviceId || repair.serviceId;
  repair.date = date || repair.date;
  repair.status = status || repair.status;

  res.json(repair);
};

export const deleteRepair = (req, res) => {
  const index = repairs.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Reparación no encontrada' });
  repairs.splice(index, 1);
  res.json({ message: 'Reparación eliminada' });
};
