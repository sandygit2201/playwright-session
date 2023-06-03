import { test ,expect} from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';


test('read data from CSV',async ({page})=>{

    type userData = {
        userName:string,
        password:string
    }

    const userFilePath = path.resolve(__dirname,'../../testData/users.csv')
    const headers = ['username','password']
    const fileContent = fs.readFileSync(userFilePath, { encoding: 'utf-8' });
    let userInfo:any =[]

   await parse(fileContent, {
        delimiter: ',',
        columns: headers,
      }, (error, result: userData[]) => {
        if (error) {
          console.error(error);
        }
        userInfo.push(result)
      });

  
      await page.goto('/index.php?route=account/login')
      await page.getByPlaceholder('E-Mail Address').fill(userInfo[0].userName)
      await page.getByPlaceholder('Password').fill(userInfo[0].password)
      await page.locator('input[value="Login"]').click()
      await expect(page.getByText('Edit your account information')).toBeVisible()

})