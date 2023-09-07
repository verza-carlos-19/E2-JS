const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const mostrarConIdImpar = (a) => {
  console.log(`
  
  MOSTRAR CON ID IMPAR
  
  `);
  let idImpar = a.filter((pizza) => pizza.id % 2 !== 0);
  idImpar.forEach((pizza) =>
    console.log(
      "la " +
        pizza.nombre +
        "tiene el id: " +
        pizza.id +
        ", vale: $" +
        pizza.precio +
        " y tiene los siguientes ingredientes: " +
        pizza.ingredientes.join(", ")
    )
  );
};
mostrarConIdImpar(pizzas);

const hayBaratas = (a) => {
  console.log(`
  
  MOSTRAR SI HAY MAS BARATAS QUE $600
  
  `);
  let piza = a.find((piza) => piza.precio < 600);
  if (a.some((pizza) => pizza.precio < 600)) {
    console.log("la " + piza.nombre + " vale menos de $600");
  }
};
hayBaratas(pizzas);

const mostrarNombreYPrecio = (a) => {
  console.log(`
  
  MOSTRAR CON NOMBRE Y PRECIO
  
  `);
  a.forEach((pizza) =>
    console.log("La " + pizza.nombre + " vale $" + pizza.precio)
  );
};
mostrarNombreYPrecio(pizzas);

const mostrarNombreYIngredientes = (a) => {
  console.log(`
  
  MOSTRAR CON NOMBRE E INGREDIENTES
  
  `);
  a.forEach((pizza) => {
    console.log("La " + pizza.nombre + " tiene los siguientes: ");
    pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
  });
};
mostrarNombreYIngredientes(pizzas);
