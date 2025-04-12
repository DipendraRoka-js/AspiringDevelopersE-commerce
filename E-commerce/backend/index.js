const PORT=4010;
const express =require('express')
app=express()

const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const multer=require('multer')
const path=require('path')
const cors=require('cors');
// const { log } = require('console');

app.use(express.json())
app.use(cors())

//Database Connection

mongoose.connect("mongodb+srv://atharvapaudel4:Atharva9849015996!@cluster0.ch7kj.mongodb.net/Seales")
.then(() => {
  console.log("Connected to mongodb");
})
.catch(err => {
  console.log("Failed to connect to mongodb", err.message);
});


//API CREATION

// app.get("/hi",(req,res)=>{

//   if (!req.file) {
//     return res.status(400).json({ success: 0, message: 'No file uploaded' });
//   }
//   return res.status(500).send({
//     message:'just looking like a wow'
//   })

// })

//Image machine 


const storage= multer.diskStorage({
  destination: './upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  
    
  }
})

// console.log("lets see:  ",path.extname(file.originalname));


const upload=multer({storage:storage})

app.use('/images',express.static('upload/images'))



app.post('/upload', upload.single('product'), (req, res) => {
  console.log('Request body:', req.body); // Log request body
  console.log('Request file:', req.file); // Log file object

  if (!req.file) {
    return res.status(400).json({
      success: 0,
      message: 'No file uploaded. Ensure the field name is "product" and the file is included.',
    });
  }

  return res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,

  });
});

//schema for creating products

const Product=mongoose.model("Product",{
  id:{
    type: Number,
    required: true
  },
  name:{
    type: String, 
    required: true,
  },
  image:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true,
  },
  new_price:{
    type:Number,
    required: true,
  },
  old_price:{
    type:Number,
    required: true,
  },
  // date:{
  //   type: DATE,
  //   default: Date.now,
  // },
  available:{
    type: Boolean,
    default:true,
  },
})

app.post('/addproduct',async (req,res)=>{

  let find=await Product.find({});

  let id;

  if (find.length>0){
    let last_product_array=find.slice(-1);
    console.log("Last_product_array: ",last_product_array);
    let last_product=last_product_array[0];
    console.log("Last_product: ",last_product);
    

    id=last_product.id+1;
  }
  else{
    id=1;
  }

  const product = new Product({
    id: id,
    name:req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price
  });
  console.log(product);
  await product.save();
  console.log("saved");
  return res.json({
    success:1,
    name:req.body.category

  })

})



//creating for deleting the product

app.post('/removeproduct',async (req,res)=>{
  await Product.findOneAndDelete({
    id:req.body.id
  });
  console.log("Removed");
  return res.json({
    success:true,
    name: req.body.name
  })

})

//creating api for getting all products to frontend

app.get('/allproducts',async(req,res)=>{

  const resp=await Product.find({})
  // console.log(resp.json());
  
  console.log("All Product Fetched");

  res.json(resp);


})

//USERS SCHEMA

const Users=mongoose.model('Cat',{
  name:{
    type: String,

  },
  email:{
    type: String,
    unique: true

  },
  password:{
    type: String

  },
  cartData:{
    type: Object

  },
  date:{
    type: Date,
    default:Date.now
  }

})

//Creating endpoint for registery of user
app.post('/signup',async (req,res)=>{

  let check = await Users.findOne({email:req.body.email});
  if (check){
    res.status(400).json({
      success: false,
      erros:'Existing users found with same email id '
    })
  }
  else{
    let cart={};
    for (let i = 0; i < 300; i++) {
      cart[i]=0;
      
    }

    const user= new Users({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      cartData: cart
   
    })
    await user.save();
    const data={
      user:{
        id:user.id
      }
    }

    const token=jwt.sign(data,'secret_ecom')
    res.json({success: true,token})
  }




  

})

app.post('/login',async (req,res)=>{
  let usercheck;
  let passCompare;

   usercheck= await Users.findOne({email:req.body.email})
  //  passwordcheck=await Users.findOne({password: req.body.password})

   if (usercheck){
     passCompare=await req.body.password===usercheck.password;
    if (passCompare){
      res.status(201).json({
        success: true,
        message:'You are Logged in'
      })
    }
  }

    else{
      res.status(401).json({
        success: false,
        message:'Incorrect email or password'
      })
    }

   
  
   
  //  if (logincheck){



    




  //      res.json({
  //       success: true,
  //       message:'You have logged in'
  //     })
     

  //   }
    

  //  else{
  //    res.json({
  //     success:false,
  //     message:'Incorrect email or password'
  //   })
  //  }
})



//crating endpoint for new colection data



app.get('/newcollection',async (req,res)=>{
  let products=await Product.find({})

  let new_collection=products.slice(1).slice(-8)

  res.status(400).json(
    new_collection
)

  console.log(new_collection);
  


 



  

})



app.get('/popular',async(req,res)=>{

  let wome= await Product.find({category:'women'})
  let women4=wome.slice(0,4)
  res.status(201).json(
    women4
  )
  

  

})

app.listen(PORT,(error)=>{
  if (!error){
    console.log(`Server running on port ${PORT}`);
    
  }
  else{
    console.log("error "+error);
    
  }

})




/*

app.post('/addproduct',(req,res)=>{
  let find;
  find= new Product.find({});
  if (find.length>0){
  const last_product_array=find.slice(-1);



  }



  })



*/