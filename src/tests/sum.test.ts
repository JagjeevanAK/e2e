import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import { app } from '..';
import request  from "supertest";
import resetDb from "./helpers/reset-db";

describe("POST/sum",()=>{
    // runs before the start of the tests
    // beforeEach(async()=>{
    //     console.log("Clearing DB");
    //     await resetDb();
    // })

    // Clear database once only before test form this file starts to run
    beforeAll(async()=>{
        console.log("clearing DB");
        await resetDb();
    })
    it("It should add 2 +1", async()=>{
        const { status, body } = await request(app).post('/sum').send({
            a: 2,
            b: 1
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer:3, id: expect.any(Number) });
    })
    
})