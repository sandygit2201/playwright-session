import { test } from "@playwright/test";
import getUsersFromExcel from "../../utils/readExcel";
import readExcel from "../../utils/readExcel";

test('read data',async({page})=>{

    const users = await readExcel.getUsers()

    console.log(users)

})