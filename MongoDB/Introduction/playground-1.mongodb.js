
// Select the database to use.
use('PrtkDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "YouTube"
  },
  {
    "name": "Python",
    "price": 15000,
    "instructor": "Coursera"
  },
  {
    "name": "JavaScript",
    "price": 18000,
    "instructor": "Udemy"
  },
  {
    "name": "React",
    "price": 22000,
    "instructor": "YouTube"
  },
  {
    "name": "Node.js",
    "price": 21000,
    "instructor": "freeCodeCamp"
  },
  {
    "name": "C++",
    "price": 17000,
    "instructor": "CodeWithHarry"
  },
  {
    "name": "Data Structures",
    "price": 25000,
    "instructor": "GeeksforGeeks"
  },
  {
    "name": "Spring Boot",
    "price": 24000,
    "instructor": "Telusko"
  },
  {
    "name": "Machine Learning",
    "price": 30000,
    "instructor": "Kaggle"
  },
  {
    "name": "Next.js",
    "price": 23000,
    "instructor": "YouTube"
  }
]
);
console.log('Done inserting Data');
