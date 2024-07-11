INSERT INTO "Category" (id, name) VALUES 
  ('1', 'Bebidas'),
  ('2', 'Pratos');

INSERT INTO "Restaurant" (id, name, address, phone, description, avaliation, avatar) VALUES
  ('1', 'La Bonne Table', 'Rua das Flores, 123', '21987654321', 'Um restaurante francês aconchegante.', 4.8, 'labonnetable.jpg'),
  ('2', 'Sushi Saito', 'Avenida Central, 456', '21976543210', 'O melhor sushi da cidade.', 4.9, 'sushisaito.jpg'),
  ('3', 'Churrascaria Gaúcha', 'Rua do Churrasco, 789', '21965432109', 'Autêntico churrasco brasileiro.', 4.7, 'churrascariagaucha.jpg'),
  ('4', 'Pizzeria Bella Napoli', 'Praça Italia, 101', '21954321098', 'Pizza italiana tradicional.', 4.6, 'bellanapoli.jpg'),
  ('5', 'Taco Fiesta', 'Rua México, 202', '21943210987', 'Deliciosos tacos e comida mexicana.', 4.5, 'tacofiesta.jpg');


INSERT INTO "Product" (id, name, description, price, avatar, "restaurantId", "categoryId") VALUES
  ('1', 'Coca Cola', 'Refrigerante de Cola', 5.00, 'cocacola.jpg', '1', '1'),
  ('2', 'Suco de Laranja', 'Suco Natural de Laranja', 7.00, 'suco.jpg', '1', '1'),
  ('3', 'Filé Mignon', 'Filé Mignon ao Molho Madeira', 45.00, 'filemignon.jpg', '1', '2'),
  ('4', 'Sashimi de Salmão', 'Finas fatias de salmão fresco.', 35.00, 'sashimi.jpg', '2', '2'),
  ('5', 'Temaki de Atum', 'Temaki recheado com atum e arroz.', 20.00, 'temaki.jpg', '2', '2'),
  ('6', 'Caipirinha', 'Tradicional drink brasileiro.', 12.00, 'caipirinha.jpg', '3', '1'),
  ('7', 'Picanha', 'Picanha grelhada ao ponto.', 50.00, 'picanha.jpg', '3', '2'),
  ('8', 'Pizza Margherita', 'Pizza com molho de tomate, mussarela e manjericão.', 30.00, 'margherita.jpg', '4', '2'),
  ('9', 'Espresso', 'Café espresso italiano.', 8.00, 'espresso.jpg', '4', '1'),
  ('10', 'Taco de Carne', 'Taco recheado com carne, alface e queijo.', 15.00, 'tacocarne.jpg', '5', '2'),
  ('11', 'Margarita', 'Drink tradicional mexicano.', 10.00, 'margarita.jpg', '5', '1');