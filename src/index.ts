import express from "express";
import { prismaClient } from "./db";

export const app = express();

app.use(express.json());

app.post("/sum",async(req,res)=>{
    try {
        const a: number = req.body.a;
        const b: number = req.body.b;
        const ans: number = a+b;
    
        if (a >= 1000000 || b >= 1000000){
            res.status(422).json({ message :"Sorry, we don't support this large numbers"})
        }
    
        const request = await prismaClient.request.create({
            data:{
                a: a,
                b: b,
                type: 'sum',
                ans: ans
            }
        })
    
        res.status(200).json({
            id : request.id,
            answer : ans
        })
    }
    catch(err){
        console.log(err);
    }
})

// app.post("/multiply",async(req,res)=>{
//     const a:number = req.body.a;
//     const b:number = req.body.b;

// })