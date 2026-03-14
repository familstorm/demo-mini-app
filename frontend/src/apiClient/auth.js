import client from './client'


export async function loginApi(payload) {
  try {
    const { data, status } = await client.post('/auth/login', payload)
    if (status == 200) {
      console.log('login api data: ', data);
    }
    return data
  } catch (error) {
    const errors = {}
    const { data, status } = error.response
    if (status == 400) {
      data.errors.map(error => {
        errors[error.path] = error.msg
      })
    }
    return data
  }
}
