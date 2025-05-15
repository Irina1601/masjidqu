import { test, expect } from '@playwright/test';

test('get adzanTime without parameter', async ({ request }) => {
   const adzanTime = await request.get('https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/adzan-time?timezone=Asia/Jakarta&latitude=-6.2&longitude=106.816666&date=2025-04-24')

   expect(adzanTime.ok()).toBeTruthy()

   expect(await adzanTime.json().then(json => json.message)).toEqual("Adzan times retrieved successfully")
   expect(await adzanTime.json().then(json => json.data[0].prayer)).toEqual("subuh")
   expect(await adzanTime.json().then(json => json.data[1].prayer)).toEqual("dzuhur")
   expect(await adzanTime.json().then(json => json.data[2].prayer)).toEqual("ashar")
   expect(await adzanTime.json().then(json => json.data[3].prayer)).toEqual("maghrib")
   expect(await adzanTime.json().then(json => json.data[4].prayer)).toEqual("isya")


console.log(await adzanTime.json())
})

test('get adzanTime with parameter', async ({ request }) => {
    const date = "2025-05-05"
    const latitude = -6.200000
    const longitude = 106.816666
    const timezone = "Asia/Jakarta"
  
    const adzanTime = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/adzan-time?date=${date}&latitude=${latitude}&longitude=${longitude}&timezone=${timezone}`)
  
    expect(adzanTime.ok()).toBeTruthy()
  
     expect(await adzanTime.json().then(json => json.message)).toEqual("Adzan times retrieved successfully")
     expect(await adzanTime.json().then(json => json.data[0].prayer)).toEqual("subuh")
     expect(await adzanTime.json().then(json => json.data[1].prayer)).toEqual("dzuhur")
     expect(await adzanTime.json().then(json => json.data[2].prayer)).toEqual("ashar")
     expect(await adzanTime.json().then(json => json.data[3].prayer)).toEqual("maghrib")
     expect(await adzanTime.json().then(json => json.data[4].prayer)).toEqual("isya")
  
  
    console.log(await adzanTime.json())
  })

test('get adzanTime with invalid or missing timezone', async ({ request }) => {
    const date = "2025-05-01"
    const latitude = null
    const longitude = null
    const timezone = "Asia/Jakarta"
  
    const adzanTime = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/adzan-time?date=${date}&latitude=${latitude}&longitude=${longitude}&timezone=${timezone}`)
  
    expect(adzanTime.ok()).toBeFalsy()
  
    expect(await adzanTime.json().then(json => json.message)).toEqual("Invalid or missing timezone / date / latitude / longitude parameter")
  
  
    console.log(await adzanTime.json())
  })