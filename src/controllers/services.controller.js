import { services } from '../data/servicesData.js';

// 🟢 Obtener todos los servicios
export const getServices = (req, res) => {
  res.json(services);
};

// 🟢 Obtener un servicio por ID
export const getServiceById = (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    return res.status(404).json({ message: 'Servicio no encontrado' });
  }
  res.json(service);
};

// 🟢 Crear un nuevo servicio
export const createService = (req, res) => {
  const { name, description, duration, price } = req.body;

  if (!name || !description || !duration || !price) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  const newService = {
    id: services.length + 1,
    name,
    description,
    duration,
    price
  };

  services.push(newService);
  res.status(201).json(newService);
};

// 🟢 Actualizar un servicio existente
export const updateService = (req, res) => {
  const { id } = req.params;
  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return res.status(404).json({ message: 'Servicio no encontrado' });
  }

  const { name, description, duration, price } = req.body;
  service.name = name || service.name;
  service.description = description || service.description;
  service.duration = duration || service.duration;
  service.price = price || service.price;

  res.json(service);
};

// 🟢 Eliminar un servicio
export const deleteService = (req, res) => {
  const index = services.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Servicio no encontrado' });
  }

  services.splice(index, 1);
  res.json({ message: 'Servicio eliminado correctamente' });
};
