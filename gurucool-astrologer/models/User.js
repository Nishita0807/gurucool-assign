class User {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.connectedTo = null; // Initially, user is not connected to any astrologer
    }
  }
  
  module.exports = User;
  