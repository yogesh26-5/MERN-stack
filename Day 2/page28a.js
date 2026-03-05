const products=[{id:1,name:"Product 1",price:25},
    {id:2,name:"Product 2",price:50},
    {id:3, name:"Product 3",price:45}];
products.forEach(product=>console.log(product));
const newp=products.filter(product=>product.price>40);
console.log(newp);
products[1].quantity=1;
let c=[];
c=[...c,products[1]];
console.log(c);