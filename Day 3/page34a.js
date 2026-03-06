import express from "express";
const app=express()
app.set("view engine","ejs");
app.set("views","./views");
app.listen(8080,()=> console.log("Server started"));
app.use(express.urlencoded({extended:true}));
let users=[
    {name:"raghu", email:"raghu@gmail.com", password:"r4123"},
    {name:"yogi", email:"yogesh@gmail.com", password:"n2123"},
    {name:"lalith", email:"lalith@gmail.com", password:"p4123"},
];
app.get("/login",(req,res)=>{
    res.render("login",{error:null});
});

app.post("/login",(req,res)=>{
const {email,password}=req.body; //Destructuring
const user=users.find((user)=> user.email===email);
if (user){
   if (user.password===password){
      res.redirect("/dashboard");
    }else{
    res.render("login",{error:"Invalid password"});
    }
}else{
    res.render("login",{error:"User not found"});
}
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register",(req,res)=>{
    users=[...users,req.body];
    res.redirect("/dashboard");
});

app.get("/dashboard",(req,res)=>{
    res.render("dashboard",{users});
});