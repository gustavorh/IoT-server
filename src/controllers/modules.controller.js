// modules.controller.js
const modulesService = require('../services/modules.service');

class modulesController {
  async create(req, res) {
    try {
      const module = await modulesService.createModule(req.body);
      res.status(201).json(module);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const modules = await modulesService.getAllModules();
      res.status(200).json(modules);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new modulesController();