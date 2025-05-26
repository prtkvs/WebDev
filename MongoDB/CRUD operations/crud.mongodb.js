//CRUD operations

use("CrudDB")

//CREATE

db.createCollection("courses")
db.courses.insertMany([
  {
    "name": "React Mastery Bootcamp",
    "price": 4999,
    "educator": "CodeWithMosh",
    "assignments": 8,
    "projects": 15
  },
  {
    "name": "Java DSA Alpha",
    "price": 0,
    "educator": "Apna College",
    "assignments": 25,
    "projects": 10
  },
  {
    "name": "Python for Beginners",
    "price": 999,
    "educator": "Udemy - Jose",
    "assignments": 14,
    "projects": 5
  },
  {
    "name": "Full Stack MERN Course",
    "price": 2999,
    "educator": "Hitesh Choudhary",
    "assignments": 20,
    "projects": 22
  },
  {
    "name": "Spring Boot Essentials",
    "price": 0,
    "educator": "CodeAcademy",
    "assignments": 10,
    "projects": 8
  },
  {
    "name": "Android App Dev with Kotlin",
    "price": 3999,
    "educator": "Coding Ninjas",
    "assignments": 18,
    "projects": 12
  },
  {
    "name": "Next.js in Depth",
    "price": 1499,
    "educator": "Traversy Media",
    "assignments": 6,
    "projects": 9
  },
  {
    "name": "Machine Learning A-Z",
    "price": 499,
    "educator": "Kirill Eremenko",
    "assignments": 30,
    "projects": 6
  },
  {
    "name": "Frontend Developer Roadmap",
    "price": 0,
    "educator": "freeCodeCamp",
    "assignments": 50,
    "projects": 20
  }
]
)

//READ

// let a = db.courses.find({price:0})
// console.log(a);
// console.log(a.count())
// console.log(a.toArray())

// let b = db.courses.findOne({price:0})
// console.log(b)

//UPDATE

// db.courses.updateOne({price:0},{$set:{price:100}})
// db.courses.updateMany({price:0},{$set:{price:1000}})

//DELETE

db.courses.deleteOne({price:100})
db.courses.deleteMany({price:1000})