document.addEventListener('DOMContentLoaded',function(){
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
  const table=document.createElement('table');
  let nameCol=document.createElement('th');
  table.setAttribute('border','1');
  table.setAttribute('width','100%');
  table.innerHTML=``;
  function createTable(){

    
    
    table.innerHTML=
    `<tr>
    <th >${'Название товара'}</th>
    <th>${'Цвет'}</th>
    <th>${'Размер'}</th>
    <th>${'Доступное кол-во'}</th>
    <th>${'Цена'}</th>
    </tr>
    
    <tr>
    <td>${items[2001].name}</td>
    <td bgColor='${items[2001].color.value}'>${items[2001].color.name}</td>
    <td>${items[2001].sizes[3001].name}</td>
    <td>${items[2001].sizes[3001].available}</td>
    <td>${items[2001].sizes[3001].price}</td>
    </tr>
    
    <tr>
    <td>${items[2001].name}</td>
    <td bgColor='${items[2001].color.value}'>${items[2001].color.name}</td>
    <td>${items[2001].sizes[3002].name}</td>
    <td>${items[2001].sizes[3002].available}</td>
    <td>${items[2001].sizes[3002].price}</td>
    </tr>
    
    <tr>
    <td>${items[2001].name}</td>
    <td bgColor='${items[2001].color.value}'>${items[2001].color.name}</td>
    <td>${items[2001].sizes[3003].name}</td>
    <td>${items[2001].sizes[3003].available}</td>
    <td>${items[2001].sizes[3003].price}</td>
    </tr>
    
    <tr>
    <td>${items[2001].name}</td>
    <td bgColor='${items[2001].color.value}'>${items[2001].color.name}</td>
    <td>${items[2001].sizes[3004].name}</td>
    <td>${items[2001].sizes[3004].available}</td>
    <td>${items[2001].sizes[3004].price}</td>
    </tr>
    
    <tr>
    <td>${items[2002].name}</td>
    <td bgColor='${items[2002].color.value}'>${items[2002].color.name}</td>
    <td>${items[2002].sizes[4001].name}</td>
    <td>${items[2002].sizes[4001].available}</td>
    <td>${items[2002].sizes[4001].price}</td>
    </tr>
    
    <tr>
    <td>${items[2002].name}</td>
    <td bgColor='${items[2002].color.value}'>${items[2002].color.name}</td>
    <td>${items[2002].sizes[4002].name}</td>
    <td>${items[2002].sizes[4002].available}</td>
    <td>${items[2002].sizes[4002].price}</td>
    </tr>
    
    <tr>
    <td>${items[2002].name}</td>
    <td bgColor='${items[2002].color.value}'>${items[2002].color.name}</td>
    <td>${items[2002].sizes[4003].name}</td>
    <td>${items[2002].sizes[4003].available}</td>
    <td>${items[2002].sizes[4003].price}</td>
    </tr>
    
    <tr>
    <td>${items[2003].name}</td>
    <td bgColor='${items[2003].color.value}'>${items[2003].color.name}</td>
    <td>${items[2003].sizes[5001].name}</td>
    <td>${items[2003].sizes[5001].available}</td>
    <td>${items[2003].sizes[5001].price}</td>
    </tr>
    
    <tr>
    <td>${items[2003].name}</td>
    <td bgColor='${items[2003].color.value}'>${items[2003].color.name}</td>
    <td>${items[2003].sizes[5002].name}</td>
    <td>${items[2003].sizes[5002].available}</td>
    <td>${items[2003].sizes[5002].price}</td>
    </tr>
    
    <tr>
    <td>${items[2003].name}</td>
    <td bgColor='${items[2003].color.value}'>${items[2003].color.name}</td>
    <td>${items[2003].sizes[5003].name}</td>
    <td>${items[2003].sizes[5003].available}</td>
    <td>${items[2003].sizes[5003].price}</td>
    </tr>
    
    <tr>
    <td>${items[2004].name}</td>
    <td bgColor='${items[2004].color.value}'>${items[2004].color.name}</td>
    <td>${items[2004].sizes[6001].name}</td>
    <td>${items[2004].sizes[6001].available}</td>
    <td>${items[2004].sizes[6001].price}</td>
    </tr>
    
    <tr>
    <td>${items[2004].name}</td>
    <td bgColor='${items[2004].color.value}'>${items[2004].color.name}</td>
    <td>${items[2004].sizes[6002].name}</td>
    <td>${items[2004].sizes[6002].available}</td>
    <td>${items[2004].sizes[6002].price}</td>
    </tr>
    
    <tr>
    <td>${items[2004].name}</td>
    <td bgColor='${items[2004].color.value}'>${items[2004].color.name}</td>
    <td>${items[2004].sizes[6003].name}</td>
    <td>${items[2004].sizes[6003].available}</td>
    <td>${items[2004].sizes[6003].price}</td>
    </tr>`;
    body.appendChild(table)
  }
  createTable();

});