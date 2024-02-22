class Customer {
    constructor(id, name, coords) {
        this.id = id;
        this.name = name;
        this.address = { lat: coords.lat, lng: coords.lng };
    }
}

module.exports = Customer;