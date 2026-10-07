const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let cars = [
  {
    "id": 1, 
      "maker": "Toyota", 
      "model": "Camry", 
      "year": "2023", 
      "color": "Silver", 
      "quantity": "15", 
      "dealer": "Toyota of Glendale" 

    }, 
    { 
      "id": 2, 
      "maker": "Honda", 
      "model": "Civic", 
      "year": "2024", 
      "color": "Black", 
      "quantity": "20", 
      "dealer": "Honda Downtown" 
    }, 
    { 
      "id": 3, 
      "maker": "Ford", 
      "model": "F-150", 
      "year": "2023", 
      "color": "White", 
      "quantity": "10", 
      "dealer": "Ford of North Hollywood" 
    }, 
    { 
      "id": 4, 
      "maker": "Chevrolet", 
      "model": "Tahoe", 
      "year": "2024", 
      "color": "Red", 
      "quantity": "8", 
      "dealer": "Chevy Malibu" 
    }, 
    { 
      "id": 5, 
      "maker": "Nissan", 
      "model": "Rogue", 
      "year": "2023", 
      "color": "Blue", 
      "quantity": "12", 
      "dealer": "Nissan of Burbank" 
    }, 
    { 
      "id": 6, 
      "maker": "BMW", 
      "model": "X5", 
      "year": "2024", 
      "color": "Gray", 
      "quantity": "5", 
      "dealer": "BMW of Encino" 
    }, 
    { 

      "id": 7, 
      "maker": "Mercedes-Benz", 
      "model": "C-Class", 
      "year": "2023", 
      "color": "Black", 
      "quantity": "7", 
      "dealer": "MB of Bev Hills" 

    }, 
    { 

      "id": 8, 
      "maker": "Hyundai", 
      "model": "Elantra", 
      "year": "2024", 
      "color": "White", 
      "quantity": "18", 
      "dealer": "Hyundai of A" 

    }, 
    { 

      "id": 9, 
      "maker": "Toyota", 
      "model": "RAV4", 
      "year": "2024", 
      "color": "Blue", 
      "quantity": "14", 
      "dealer": "Toyota of Pasadena" 

    }, 
    { 
      "id": 10, 
      "maker": "Toyota", 
      "model": "Corolla", 
      "year": "2024", 
      "color": "White", 
      "quantity": "22", 
      "dealer": "Toyota of Glendale" 

    }, 
    { 
      "id": 11, 
      "maker": "BMW", 
      "model": "3 Series", 
      "year": "2023", 
      "color": "Black", 
      "quantity": "9", 
      "dealer": "BMW of Beverly Hills" 
    } 



];


app.get('/api/developer', (req, res) => {
  res.json({ developer: 'Your Name' });
});


app.get('/api/cars', (req, res) => {
  res.json(cars);
});


app.get('/api/cars/make/:make', (req, res) => {
  const make = req.params.make;
  const filteredCars = cars.filter(car => car.make === make);
  res.json(filteredCars);
});


app.get('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find(car => car.id === id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});


app.post('/api/cars', (req, res) => {
  const newCar = req.body;
  cars.push(newCar);
  res.status(201).json(newCar);
});


app.put('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex(car => car.id === id);
  if (index !== -1) {
    cars[index] = { ...cars[index], ...req.body };
    res.json(cars[index]);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});


app.delete('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = cars.length;
  cars = cars.filter(car => car.id !== id);
  if (cars.length < initialLength) {
    res.json({ message: 'Car deleted successfully' });
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});


app.listen(port, () => {
  console.log ('http://localhost:${port}');
});