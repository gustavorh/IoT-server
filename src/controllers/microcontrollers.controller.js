const MicrocontrollersService = require("../services/microcontrollers.service");

class MicrocontrollersController {
  async create(req, res) {
    try {
      const microcontroller =
        await MicrocontrollersService.createMicrocontroller(req.body);
      res.status(201).json(microcontroller);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const microcontrollers =
        await MicrocontrollersService.getAllMicrocontrollers();
      res.status(200).json(microcontrollers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async handleCreateView(req, res) {
    res.render("microcontrollers/add");
  }
}

module.exports = new MicrocontrollersController();
