import { test } from "@playwright/test";

test('get request', async({request, baseURL}) =>{


    const response = await request.get(`${baseURL}/api/users/2`,{
        headers:{

        },
        params:{

        }
    })

    console.log(response.status())
    console.log((await response.body()).toString())

})

test.only('post request', async({request, baseURL}) =>{

    const response = await request.put(`${baseURL}/api/users/2`, {
        data:{
            name: "morpheus", 
            job: "zion resident"
        },
        headers:{

        },
        params:{

        }
    })

    console.log(response.status())
    console.log((await response.body()).toString())

})