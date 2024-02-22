const Trip = require("../Tracking/Trip");

class Namespace {
    constructor(id, name, image, endpoint) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.endpoint = endpoint;
      this.rooms = [];
    }
}

module.exports = Namespace;
