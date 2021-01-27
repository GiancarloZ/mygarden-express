module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Seeds', [{
      title: 'Tam Jalapeno Pepper',
      scientificName: 'Capsicum annuum',
      images: ['https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'],
      summary:  "Mild, ideal for pickling. High-Yielding jalapenos.",
      daysToSprout: [7,14],
      daysToMaturity: 70,
      heightAtMaturity: 36,
      rowSpacing: 36,
      plantSpacing: 18,
      plantingDepth: 1,
      description: 'This project was built using Vanilla JavaScript, HTML, and CSS',
      howToGrow: "plant it",
      company: "Hudson Valley Seeds",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seeds', null, {});
  }
};