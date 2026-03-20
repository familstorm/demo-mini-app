import client from './client'


export async function loadTranslations(lang) {
  try {
    const { data, status } = await client.get(`/translations/${lang}`)
    if (status == 200) {
      console.log('translations api data: ', data);
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

  // // const res = await fetch(`/translations?lang=${lang}`)
  // // const data = await res.json()

  // console.log(`Language: ${lang}`)
  // const data = {
  //   en: {
  //     translation: {
  //       "Login": "Log in"
  //     }
  //   },
  //   sv: {
  //     translation: {
  //       "Login": "Logga in"
  //     }
  //   }
  // };

  // return data[lang].translation
}
