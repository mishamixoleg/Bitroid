document.addEventListener('DOMContentLoaded',function(){
// const body=document.querySelector('body');
// const requestURL ='db.json';
// const request= new XMLHttpRequest();
// function getData(){
//   request.open('GET',requestURL);
//   request.responseType='json';
//   request.send();
//   request.onload=function(){
//     let goods=request.response;
//     createTable(goods);
    
//   };
// }
// function createTable(jsonObj){
//   const table = document.createElement('table');
//   table.setAttribute('border','1');
//   table.setAttribute('width','100%');
  
//   table.innerHTML=
//   `<tr>
//   <th>${'Название товара'}</th>
//   <th>${'Цвет'}</th>
//   <th>${'Размер'}</th>
//   <th>${'Доступное кол-во'}</th>
//   <th>${'Цена'}</th>
//   </tr>`;
//  body.appendChild(table);
// }
// getData();
const body=document.querySelector('body');
const items ={
  "2001": {
    "name": "Товар 1",
    "color": {
      "name": "Красный",
      "value": "#FF004D"
    },
    "sizes": {
      "3001": {
        "name": "S",
        "available": 26,
        "price": 900
      },
      "3002": {
        "name": "M",
        "available": 24,
        "price": 940
      },
      "3003": {
        "name": "L",
        "available": 12,
        "price": 300
      },
      "3004": {
        "name": "XL",
        "available": 32,
        "price": 800
      }
    }
  },
  "2002": {
    "name": "Товар 2",
    "color": {
      "name": "Зеленый",
      "value": "#008365"
    },
    "sizes": {
      "4001": {
        "name": "M",
        "available": 9998,
        "price": 200
      },
      "4002": {
        "name": "L",
        "available": 45,
        "price": 230
      },
      "4003": {
        "name": "XXL",
        "available": 1,
        "price": 1300
      }
    }
  },
  "2003": {
    "name": "Товар 3",
    "color": {
      "name": "Синий",
      "value": "#3B5998"
    },
    "sizes": {
      "5001": {
        "name": "S",
        "available": 0,
        "price": 0
      },
      "5002": {
        "name": "M",
        "available": 0,
        "price": 0
      },
      "5003": {
        "name": "L",
        "available": 23,
        "price": 130
      }
    }
  },
  "2004": {
    "name": "Товар 4",
    "color": {
      "name": "Марсала",
      "value": "#4C1A2C"
    },
    "sizes": {
      "6001": {
        "name": "L",
        "available": 0,
        "price": 0
      },
      "6002": {
        "name": "XL",
        "available": 0,
        "price": 0
      },
      "6003": {
        "name": "XXL",
        "available": 0,
        "price": 0
      }
    }
  }
};
function createTable(){
  
}
const table=document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('width','100%');
for( let i=0; i<items.length ;i++){
 const good=document.createElement('td');
 good.setAttribute('id','good');
 const color=document.createElement('td');
 color.setAttribute('id','color');
 const size=document.createElement('td');
 size.setAttribute('id','size');
 const available=document.createElement('td');
 available.setAttribute('id','available');
 const price=document.createElement('td');
 price.setAttribute('id','price');
}

  table.innerHTML=
  `<tr>
  <th>${'Название товара'}</th>
  <th>${'Цвет'}</th>
  <th>${'Размер'}</th>
  <th>${'Доступное кол-во'}</th>
  <th>${'Цена'}</th>
  </tr>`;
 body.appendChild(table);














 




  



});