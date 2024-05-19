import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";



export const register = async (req, res) => {
    const {username, email, password } = req.body;
// //    db operations  
// console.log (req.body);
try{

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); 
    console.log (hashedPassword);
    
    // create a new user and save to db 
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password:hashedPassword,
        },
    });
    
    console.log(newUser)
    
    res.status(201).json({message:"User created successfully "})
}catch(err){
    console.log(err);
    res.status(500).json({message: "failed to create user!"});
}

};
export const login = async (req, res) => {
//    db operations 
const { username, password } = req.body;

 try {

     // CHECK IF THE USER EXISTS 
     const user = await prisma.user.findUnique({
        where:{username}
     })
     if (!user) return res.status(401).json({message:"invalid credentials!"})
     // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.passwprd );
    
    if(!isPasswordValid) return res.status(401).json({message:"invalid credentials!"})
     
     
     // GENERATE COOKIE TOKEN AND SEND TO THE USER 

    //  res.setHeader("Set-Cookie", "test=" + "myValue").json("success")

    res.cookie("test2", "myvalue2", {
        httpOnly:true, 
        // secure:true
    }).status(200).json({message: "login successful"})


    } catch(err){
        console.log (err)
        res.status(500).json({message: "failed to login!" })
    }
}
export const logout = (req, res) => {
//    db operations 
}