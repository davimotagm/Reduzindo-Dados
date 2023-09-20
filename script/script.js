const products = [
    {
      name: 'Camisa Polo',
      size: 'G',
      price: 90,
      sale: true,
    },
    {
      name: 'Casaco de Couro',
      size: 'M',
      price: 350,
      sale: true,
    },
    {
      name: 'Calça',
      size: 'GG',
      price: 80,
      sale: false,
    },
    {
      name: 'Jaqueta Jeans',
      size: 'P',
      price: 200,
      sale: false,
    },
    {
      name: 'Moletom',
      size: 'GG',
      price: 180,
      sale: false,
    },
    {
      name: 'Camisa Regata',
      size: 'M',
      price: 60,
      sale: true,
    },
  ];
  
  //Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado no console do seu navegador.
  
  //1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números contidos dentro do array [20, 13, 50, 36, 97].
  const numbers = [20, 13, 50, 36, 97];
  
  function sumNumbers(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;
  }
  console.log('Exercício 1:')
  console.log(sumNumbers(numbers));
  console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');
  
  //2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os elementos desse array e retorne o valor total de todos os produtos do carrinho.
  function totalProducts(array) {
    const arrayPrices = array.map(products => products.price);
    const sumPrice = arrayPrices.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sumPrice;
  }
  console.log('Exercício 2:')
  console.log(totalProducts(products));
  console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');
  
  //3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
  function totalProductsSize(array) {
    const onlyGG = array.filter(products => products.size === 'GG');
    const sumPriceGG = onlyGG.map(products => products.price);
    return sumPriceGG.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  console.log('Exercício 3:')
  console.log(totalProductsSize(products));
  console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');
  
  //DESAFIO
  //4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no preço deles. Após isso, some o valor total desses produtos.
  function totalProductsSale(array) {
    const onlySale = array.filter(products => products.sale);
    const sumPriceSale = onlySale.map(products => products.price / 2);
    return sumPriceSale.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  console.log('Desafio')
  console.log(totalProductsSale(products));
  console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');