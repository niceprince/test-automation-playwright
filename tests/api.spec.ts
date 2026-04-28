import { test, expect } from '@playwright/test';

test('GET users API', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  // Validate status
  expect(response.status()).toBe(200);

  // Convert response to JSON
  const body = await response.json();

  console.log(body);

  // Validate data
  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('id');
});

test('POST create user', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Rahul',
      job: 'QA Engineer'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);

  expect(body.name).toBe('Rahul');
});