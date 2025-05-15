import { test, expect } from '@playwright/test';

test('post create Mosque review', async ({ request }) => {

    const mosqueId = "682564e292930cc2d8fcf177";

  const mosqueResponse = await request.post(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques/${mosqueId}/review`, {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDczODEwNjIsInVzZXJfaWQiOiI2ODI1OTljNjQ1YTNkZDYxZDBmMDM3ZDgiLCJ1c2VybmFtZSI6InRlc3RfdXNlciJ9.QfshyhEI6D3hAbTK1OyYqnZIAIGQHCqPHsCu_FGkoAc',
      'Content-type': 'application/json',
    },
    data: {
        rating: 3,
        comment: 'masjidnya bagus'
    }
  })
  console.log(await mosqueResponse.json())
  expect(mosqueResponse.ok()).toBeTruthy()

  //expect(await mosqueResponse.json().then(data => data.data.length)).toBeGreaterThanOrEqual(0)
  //expect(await mosqueResponse.json().then(data => data.message)).toMatch('Mosque details retrieved successfully')
  //expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()
  
})

/*test('get MosqueNotFound', async ({ request }) => {
    const mosqueId = "681d86099eef8ad572";
  
    const mosqueResponse = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques/${mosqueId}`)
    console.log(await mosqueResponse.json())
    expect(mosqueResponse.ok()).toBeFalsy()
  
    //expect(await mosqueResponse.json().then(data => data.data.length)).toBeGreaterThanOrEqual(0)
    expect(await mosqueResponse.json().then(data => data.message)).toMatch('Mosque not found')
    //expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()
  

  })*/