import client from './client'


export async function createApi(payload) {
  try {
    const url = `/pricelist`
    const { data, status } = await client.post(url, payload)

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
      console.log('this', data);
    }
    return data
  }
}


export async function editableApi(id, payload) {
  try {
    const url = `/pricelist/${id}/editable-inline`
    const { data, status } = await client.post(url, payload)
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

export async function pricelistApi(params = {}) {
  try {
    const { data, status } = await client.get('pricelist', params)
    if (status == 200) {
      console.log('pricelistApi: ', data);
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

