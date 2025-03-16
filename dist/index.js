"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const a = req.body.a;
        const b = req.body.b;
        const ans = a + b;
        if (a >= 1000000 || b >= 1000000) {
            res.status(422).json({ message: "Sorry, we don't support this large numbers" });
        }
        const request = yield db_1.prismaClient.request.create({
            data: {
                a: a,
                b: b,
                type: 'sum',
                ans: ans
            }
        });
        res.status(200).json({
            id: request.id,
            answer: ans
        });
    }
    catch (err) {
        console.log(err);
    }
}));
// app.post("/multiply",async(req,res)=>{
//     const a:number = req.body.a;
//     const b:number = req.body.b;
// })
