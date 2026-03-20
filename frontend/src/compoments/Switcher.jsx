import { useState } from "react"
// import { changeLanguage } from '../i18n'
import { useLocalization } from '../contexts/LocalizationProvider'

const languages = {
  sv: {
    lang: 'sv',
    text: 'Svenska',
    flag: '/flags/SE.png'
  },
  en: {
    lang: 'en',
    text: 'English',
    flag: '/flags/GB.png'
  },
}

function Switcher() {
  const { state, loadLanguage, setLanguageCode } = useLocalization()
  const { language } = state

  const [open, setOpen] = useState(false)

  const getLanguageItem = (language) => {
    return languages[language]
  }

  const handleChangeLanguage = async (item) => {
    setOpen(!open)
    setLanguageCode(item.lang)
    loadLanguage(item.lang)
  }

  return(
    <>
      <div className='switcher-section'>
          <div onClick={() => setOpen(!open)} className='dropdown-lang'>
            <span>{getLanguageItem(language).text}</span>
            <img src={getLanguageItem(language).flag} alt={getLanguageItem(language).text} />
          </div>
          {open && (
            <div className="dropdown-select">
              { Object.values(languages).map((item) => (
                <div key={item.lang} onClick={() => handleChangeLanguage(item)} className='lang-item'>
                  <span>{item.text}</span>
                  <img src={item.flag} alt={item.text} />
                </div>
               
              ))}
            </div>
          )}
          
      </div>
    </>
  )
}

export default Switcher
