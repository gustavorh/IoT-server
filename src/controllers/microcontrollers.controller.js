const MicrocontrollersService = require("../services/microcontrollers.service");

class MicrocontrollersController {
  async getAll(req, res) {
    try {
      const microcontrollers =
        await MicrocontrollersService.getAll();
      res.status(200).json(microcontrollers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.microcontrollerId;
      const microcontroller = await MicrocontrollersService.getById(id);
      res.status(200).json(microcontroller);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const microcontroller =
        await MicrocontrollersService.create(req.body);
      res.status(201).json(microcontroller);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateById(req, res) {
    try {
      const id = req.params.microcontrollerId;
      const microcontroller =
        await MicrocontrollersService.updateById(id, req.body);
      res.status(200).json(microcontroller);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const id = req.params.microcontrollerId;
      await MicrocontrollersService.deleteById(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MicrocontrollersController();
