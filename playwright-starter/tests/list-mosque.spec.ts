import { test, expect } from '@playwright/test';

test('get listMosque', async ({ request }) => {
  const limit = 10;
  const latitude = -6.5080764
  const longitude = 106.8230115
  const page = 100000

  const mosqueResponse = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques?limit=${limit}&page=${page}&latitude=${latitude}&longitude=${longitude}`)
  console.log(await mosqueResponse.json())
  expect(mosqueResponse.ok()).toBeTruthy()

  expect(await mosqueResponse.json().then(data => data.data.length)).toBeGreaterThanOrEqual(0)
  expect(await mosqueResponse.json().then(data => data.message)).toMatch('Mosque list retrieved successfully')
  expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()

  
})

/*test('get list mosque with parameter limit', async ({ request }) => {
  const limit = 3;
  const mosqueResponse = await request.get('https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/mosques?limit=' + limit);

  expect(mosqueResponse.ok()).toBeTruthy()

  expect(await mosqueResponse.json().then(data => data.data.length)).toEqual(limit);
  expect(await mosqueResponse.json().then(data => data.message)).toMatch('Successfully retrieved mosque list')
  expect(await mosqueResponse.json().then(data => data.success)).toBeTruthy()

  // console.log(await mosqueResponse.json())
  
})

test('get list mosque with parameter ', async ({ request }) => {
  const latitude = -6.200000
  const longitude = 106.816666

  const mosqueResponse = await request.get(`https://vfyiwfmxnm.ap-southeast-1.awsapprunner.com/v1/public/adzan-time?latitude=${latitude}&longitude=${longitude}`)

  expect(adzanTime.ok()).toBeTruthy()

  expect(await adzanTime.json().then(data => data.adzan_times.subuh)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.dzuhur)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.ashar)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.maghrib)).toBeTruthy()
  expect(await adzanTime.json().then(data => data.adzan_times.isya)).toBeTruthy()*/