//Install Express FramwWork in API Folder Path and other dependencies:
//1. npm install express-generator -g
//2. npm install express --save
//3. npm install body-parser --save 
//4. npm  install

var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Running Server
app.listen(3000,function(){
  console.log('listening...')
});

//Processing data receieved from client
app.post('/getProductName',function(req,res)
{
  console.log('Entered into API method');
  var productCode=req.body.productCode;
  var productName;
  console.log("productCode Passed as Input : " + productCode);
  switch(productCode)
  {
      case 1:
          productName = "Chocolate";
          break;
      case 2:
          productName  = "Cookies";
          console.log(productName);
          break;
      case 3:
          productName = "Cup Cake";
          break;
      default:
          productName = "Product not found"     

  }
  //return productName 
  res.json(productName);
});

//Run the sever 
//5. node server.js