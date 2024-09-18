class Astrologer {
    constructor(id, name, isTop = false, connectionWeight = 1) {
      this.id = id;
      this.name = name;
      this.isTop = isTop;
      this.connectionWeight = connectionWeight;
      this.totalConnections = 0;
    }
  
    // Method to toggle top astrologer status and adjust connection weight
    toggleTopStatus() {
      this.isTop = !this.isTop;
      this.connectionWeight = this.isTop ? 2 : 1; // Set higher weight for top astrologers
    }
  }
  
  module.exports = Astrologer;
  