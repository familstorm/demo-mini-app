import client from './client'


export async function loginApi() {
  const data = await client.post('/auth/login', { email: 'asdad', password: 'asdasd' })
  console.log('data: ', data);
  return data
}
