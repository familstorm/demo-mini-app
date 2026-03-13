import { useState } from "react"

const languages = [
  {
    lang: 'SE',
    text: 'Svenska',
    flag: '/flags/SE.png'
  },
  {
    lang: 'EN',
    text: 'English',
    flag: '/flags/GB.png'
  },
]

function Switcher() {
  const [open, setOpen] = useState(false)
  const [currentLang, setLanguage] = useState(languages[0])

  const handleChangeLanguage = (lang) => {
    setLanguage(lang)
    setOpen(!open)
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
              { languages.map((item) => (
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
