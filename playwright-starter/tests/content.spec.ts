import { test, expect, type Page } from '@playwright/test';

test('get adzanTime without parameter', async ({ request }) => {
  const adzanTime = await request.get('https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/adzan-time')

  expect(adzanTime.ok()).toBeTruthy()

  expect(await adzanTime.json().then(data => data.adzan_times.subuh)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.dzuhur)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.ashar)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.maghrib)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.isya)).toBeTruthy()


  // console.log(await mosqueResponse.json())
})

test('get adzanTime with parameter', async ({ request }) => {
  const date = "2025-05-05"
  const latitude = -6.200000
  const longitude = 106.816666

  const adzanTime = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/adzan-time?date=${date}&latitude=${latitude}&longitude=${longitude}`)
  //const x = await request.get('https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/adzan-time?date='+date+'&latitude='+latitude+'&longitude='+longitude)

  expect(adzanTime.ok()).toBeTruthy()

  expect(await adzanTime.json().then(data => data.adzan_times.subuh)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.dzuhur)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.ashar)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.maghrib)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.isya)).toBeTruthy()


  // console.log(await mosqueResponse.json())
})

test('get listMosque', async ({ request }) => {
  const mosqueResponse = await request.get('https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques')

  expect(mosqueResponse.ok()).toBeTruthy()

  expect(await mosqueResponse.json().then(data => data.data.length)).toBeGreaterThan(0)
  expect(await mosqueResponse.json().then(data => data.message)).toMatch('Successfully retrieved mosque list')
  expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()

  // console.log(await mosqueResponse.json())
})

test('get list mosque with parameter limit', async ({ request }) => {
  const limit = 3;
  const mosqueResponse = await request.get('https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques?limit=' + limit);

  expect(mosqueResponse.ok()).toBeTruthy()

  expect(await mosqueResponse.json().then(data => data.data.length)).toEqual(limit);
  expect(await mosqueResponse.json().then(data => data.message)).toMatch('Successfully retrieved mosque list')
  expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()

  // console.log(await mosqueResponse.json())
  
})
