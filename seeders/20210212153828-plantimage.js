module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('plantImages', [{
      img: "https://www.theartofdoingstuff.com/wp-content/uploads/2011/03/seed-starting-10.jpg",
      title: "seed planted",
      plantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      img: "https://cdn.harvesttotable.com/htt/2017/01/23180519/Pea-bigstock-Small-pea-plant-18673091-1024x1004.jpg",
      title: "plant finally sprouted!",
      plantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://cdn.shopify.com/s/files/1/1196/4148/products/tam-mild-jalapeno-plant_400x400.png?v=1464349667",
      title: "JALAPENOS FOR DAYS!",
      plantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://www.theartofdoingstuff.com/wp-content/uploads/2011/03/seed-starting-10.jpg",
      title: "Pod is filled!",
      plantId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://i.pinimg.com/originals/fd/9e/65/fd9e6517b524cc4308335d6f882e8b54.jpg",
      title: "MY FIRST SPROUT",
      plantId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
      title: "looook at these vegetables!",
      plantId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://www.theartofdoingstuff.com/wp-content/uploads/2011/03/seed-starting-10.jpg",
      title: "AAAAAAND Now we wait!",
      plantId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://i.pinimg.com/originals/fd/9e/65/fd9e6517b524cc4308335d6f882e8b54.jpg",
      title: "BABY SPROUT!",
      plantId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      img: "https://www.theartofdoingstuff.com/wp-content/uploads/2011/03/seed-starting-10.jpg",
      title: "seed planted",
      plantId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://i.pinimg.com/originals/fd/9e/65/fd9e6517b524cc4308335d6f882e8b54.jpg",
      title: "plant finally sprouted!",
      plantId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://www.gardeningknowhow.com/wp-content/uploads/2019/01/summertime-lettuce.jpg",
      title: "plant finally sprouted!",
      plantId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://www.theartofdoingstuff.com/wp-content/uploads/2011/03/seed-starting-10.jpg",
      title: "seed startin!",
      plantId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://i.pinimg.com/originals/fd/9e/65/fd9e6517b524cc4308335d6f882e8b54.jpg",
      title: "plant finally sprouted!",
      plantId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      img: "https://cdn.shopify.com/s/files/1/1196/4148/products/tam-mild-jalapeno-plant_400x400.png?v=1464349667",
      title: "looook at these vegetables!",
      plantId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      img: "https://www.theartofdoingstuff.com/wp-content/uploads/2011/03/seed-starting-10.jpg",
      title: "Planted",
      plantId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      img: "https://i.pinimg.com/originals/fd/9e/65/fd9e6517b524cc4308335d6f882e8b54.jpg",
      title: "7 days and got first sprout",
      plantId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1196/4148/products/tam-mild-jalapeno-plant_400x400.png?v=1464349667",
      title: "looook at these JALAPENOS!",
      plantId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
   
 
 
   

  
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('plantImages', null, {});
  }
};
