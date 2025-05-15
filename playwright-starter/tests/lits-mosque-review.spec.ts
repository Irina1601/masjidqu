import { test, expect } from '@playwright/test';

test('get list Mosque review', async ({ request }) => {
  const mosqueId = "681de88a7d9b2c5017e84994";

  const mosqueResponse = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques/${mosqueId}`)
  console.log(await mosqueResponse.json())
  expect(mosqueResponse.ok()).toBeTruthy()

  //expect(await mosqueResponse.json().then(data => data.data.length)).toBeGreaterThanOrEqual(0)
  expect(await mosqueResponse.json().then(data => data.message)).toMatch('Mosque details retrieved successfully')
  //expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()
  
})

test('get MosqueNotFound', async ({ request }) => {
    const mosqueId = "681d86099eef8ad572";
  
    const mosqueResponse = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques/${mosqueId}`)
    console.log(await mosqueResponse.json())
    expect(mosqueResponse.ok()).toBeFalsy()
  
    //expect(await mosqueResponse.json().then(data => data.data.length)).toBeGreaterThanOrEqual(0)
    expect(await mosqueResponse.json().then(data => data.message)).toMatch('Mosque not found')
    //expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()
  

  })