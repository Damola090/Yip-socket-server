class Trip {
  constructor(id, agentId, customerId, status) {
    this.id = id;
    this.agentId = agentId;
    this.customerId = [customerId];
    this.startLocation = { lat: 0, lng: 0 };
    this.currentLocation = { id: "", lat: 0, lng: 0 };
    this.endLocation = { lat: 0, lng: 0 };
    this.startTime = "";
    this.endTime = "";
    this.currentTime = "";
    this.status = status;
    this.route = [];
  }

  FetchRouteFromGoogle(coordList) {
    this.route = coordList;
  }

  updateCurrentLocation(coords) {
    this.currentLocation = coords;
  }

  startTrip() {
    this.status = "started";
  }

  endTrip() {
    this.status = "End";
  }
}

module.exports = Trip;
