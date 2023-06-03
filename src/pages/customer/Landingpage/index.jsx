import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useTranslation from '@/common/customHooks/translations';
import { useLanguageContext } from '@/common/contexts/LanguageContext';


function LandingPage() {
  let navigate = useNavigate()
  const t = useTranslation()
  const { language, changeLanguage } = useLanguageContext()
  return (
    <div>
      <div>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          checked
        >
          <option value='' disabled defaultValue>
            {t.lang}
          </option>
          <option value='en'>English</option>
          <option value='ar'>عربى</option>
        </select>
      </div>
      <button onClick={() => navigate('/home')} className='text-emerald-700	'>
        {/* {t.hello} */}
        <i className='fa-thin fa-treasure-chest'></i>
      </button>
      &nbsp;
      <input type='checkbox' className='accent-pink-500' checked />
      <button onClick={() => toast.success('/auth/signin')}>
        {' '}
        {t.welcome} <i class='fas fa-home'></i>s
      </button>
    </div>
  )
}

export default LandingPage;
