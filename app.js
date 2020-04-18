//npm install axios
var axios = require('axios');
var productCode = 2;
console.log("Product Code : " , productCode);
axios.post('http://localhost:3000/getProductName', {
            productCode : productCode          
          }).then(res=>console.log("Product Name returned by API Server : ",res.data))
    
        