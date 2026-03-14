export async function loadTranslations(lang) {
  // const res = await fetch(`/api/translations?lang=${lang}`)
  // const data = await res.json()

  console.log(`Language: ${lang}`)
  const data = {
    en: {
      translation: {
        "Login": "Log in"
      }
    },
    sv: {
      translation: {
        "Login": "Logga in"
      }
    }
  };

  return data[lang].translation
}
