const Astrologer = require('../models/Astrologer');
const User = require('../models/User');

// Mock data for astrologers and users
let astrologers = [
  new Astrologer(1, 'Astro1'),
  new Astrologer(2, 'Astro2'),
  new Astrologer(3, 'Astro3', true, 2) // Example of a top astrologer
];

let users = [
  new User(1, 'User1'),
  new User(2, 'User2'),
  new User(3, 'User3')
];

// Function to distribute users to astrologers
function distributeUsers() {
  users.forEach(user => {
    let selectedAstrologer = selectAstrologer();
    user.connectedTo = selectedAstrologer.id;
    selectedAstrologer.totalConnections++;
  });
  return users;
}

// Function to select the astrologer based on score (weight/totalConnections)
function selectAstrologer() {
  const scores = astrologers.map(astrologer => ({
    astrologer,
    score: astrologer.connectionWeight / (astrologer.totalConnections + 1) // Add 1 to avoid division by 0
  }));

  // Select the astrologer with the highest score
  return scores.reduce((prev, curr) => (prev.score > curr.score ? prev : curr)).astrologer;
}

// Toggle top status of astrologer
function toggleTopAstrologer(astrologerId) {
  const astrologer = astrologers.find(a => a.id === astrologerId);
  if (astrologer) {
    astrologer.toggleTopStatus();
  }
  return astrologer;
}

// Get astrologer details
function getAstrologers() {
  return astrologers;
}

module.exports = {
  distributeUsers,
  toggleTopAstrologer,
  getAstrologers
};
