import { test, expect } from '@playwright/test';
require('dotenv').config();

test('Scenario 3: Verify Islamabad Temperature', async ({ request }) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const response = await request.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${API_KEY}&units=metric`
  );

  // Assert response code
  expect(response.status()).toBe(200);

  // Assert temperature exists
  const responseBody = await response.json();
  expect(responseBody.main.temp).toBeDefined();
});
