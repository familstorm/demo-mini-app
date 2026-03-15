import { useState } from "react"
import { changeLanguage } from '../i18n'
import { Utils } from "../utils/storage"

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
  const lang = Utils.getLocalStorage('lang') || 'en'

  const [open, setOpen] = useState(false)
  const [currentLang, setLanguage] = useState(languages[lang])

  const handleChangeLanguage = async (item) => {
    setOpen(!open)
    setLanguage(item)
    changeLanguage(item.lang)
  }

  return(
    <>
      <div className='switcher-section'>
          <div onClick={() => setOpen(!open)} className='dropdown-lang'>
            <span>{currentLang.text}</span>
            <img src={currentLang.flag} alt={currentLang.text} />
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
