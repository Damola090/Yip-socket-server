class SuperUser {
  constructor(id, name, endpoint) {
    this.id = id;
    this.name = name;
    this.namespaceEndpoint = endpoint
    this.trips = []
    this.myAgents = [];
  }

  addAgent(agent) {
    this.myAgents.push(agent);
  }

  addTrip(trip) {
    this.trips.push(trip)
  }
}

module.exports = SuperUser;
