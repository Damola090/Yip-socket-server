class FieldAgent {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.startLocation = { lat: 0, lng: 0 };
    this.currentLocation = { lat: 0, lng: 0 };
    this.endLocation = { lat: 0, lng: 0 };
    this.startTime = "";
    this.endTime = "";
    this.trips = []
    this.movement = [];
  }

  addTrip (pickedTrip) {
    this.trips.push(pickedTrip)
  }

  updateMovement(coords) {
    this.movement = [...this.movement, coords]
  }
}

module.exports = FieldAgent;
