import Express from "express";
import {prisma} from "./libs/prisma.ts"

const app = Express();

async function teste() {
    return await prisma.usuarios.findMany();
}

console.log(await teste());

app.get("/", async (req, res) => {
    res.json(await teste())
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});