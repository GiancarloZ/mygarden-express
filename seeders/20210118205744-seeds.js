module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seeds', [{
      title: 'Tam Jalapeno Pepper',
      scientificName: 'Capsicum annuum',
      images: ["https://www.pepperseeds.eu/pub/media/catalog/product/cache/b56a9049443cfaeedfe24666b14227c1/j/a/jalapeno_tam.jpg", "https://cdn.shopify.com/s/files/1/2954/2248/products/Pepper-Tam-Jalapeno-Vegetable-Ferry-Morse_1400x.jpg?v=1608227754"],
      summary:  "Mild, ideal for pickling. High-Yielding jalapenos.",
      daysToSprout: [7,14],
      daysToMaturity: 70,
      heightAtMaturity: 36,
      rowSpacing: 36,
      plantSpacing: 18,
      plantingDepth: 0.25,
      description: 'Very mild hot peppers. Combine with garlic and ginger as a stir-fry starter. Wonderful pickled. Among the easiest to grow of all pepper varieties.',
      howToGrow: "Start indoors 8-10 weeks before last front in a very warm spot (80 degrees is ideal). Keep in a well-ventilated place at 70+ degrees. Don't overwater. Transplant in full sun into rich, well drained soil once frost has passed.",
      company: "Hudson Valley Seeds",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fox Cherry Tomato',
      scientificName: 'Solanum lycopersicum',
      images: ["https://cdn.shopify.com/s/files/1/0072/0909/1117/products/img_6576_1.jpg?v=1573768686", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKnqxnTQxPREZKYvz6MtQpEP5HizgJOGCQw&usqp=CAU"],
      summary:  "Reliable, high-yielding two-bite cherry.",
      daysToSprout: [3,10],
      daysToMaturity: 75,
      heightAtMaturity: 72,
      rowSpacing: 42,
      plantSpacing: 24,
      plantingDepth: 0.5,
      description: "Big, rangey vines yield loads of well-flavored 2'' fruit: large enough to be more useful for cooking than smaller cherries. More disease-resistant than standard varieties.",
      howToGrow: "Start seeds indoors 6-8 weeks before last frost ina warm spot with ample light (supplemental light usually required). Transplant outdoors once frost has passed. Staking required. Prune tomatoes when they reach about 24'' high.",
      company: "Hudson Valley Seeds",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Summertime Lettuce',
      scientificName: 'Lactauca sativa',
      images: ["https://cdn.shopify.com/s/files/1/0972/6282/products/summertime-lettuce-68-days-vegetables-pinetree-garden-seeds_506_2000x.jpg?v=1548820049", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLo61YS4L64NG9DIivVR9mLmSgnhPhg730-6cKxDngOj5rjSWa_XHotXLbrY&usqp=CAc"],
      summary:  "A delicious heading lettuce.",
      daysToSprout: [6,10],
      daysToMaturity: 60,
      heightAtMaturity: 24,
      rowSpacing: 12,
      plantSpacing: 12,
      plantingDepth: 0.25,
      description: "A crisp heading lettuce that, as the name suggests, excels during the heat of summer. IT resists growing bitter bolting, the bane of all lettuce growers.",
      howToGrow: "Start 3-4 weeks before planting outside. Sow 2-3 seeds per cell, thinning to 1 cell. Transplant 8-12'' apart in rows 12'' apart. Harvest full-sized heads or snip off individual leaves.",
      company: "Hudson Valley Seeds",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('seeds', null, {});
  }
};