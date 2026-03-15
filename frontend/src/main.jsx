import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  RouterProvider } from "react-router";
import './i18n';

import './index.css'
import { initI18n } from './i18n';
import router from './router.jsx'
import { Utils } from './utils/storage.js';


const lang = Utils.getLocalStorage('lang') || 'en'

await initI18n(lang)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
