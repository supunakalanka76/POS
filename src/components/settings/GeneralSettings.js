import React from 'react'
import Settings from './Settings'

function GeneralSettings() {
  return (
    <div className='general-settings'>

      <div className='general-header'>
        <Settings/>
        <h2>General Settings</h2>
      </div>

      <div className='general-content'>
        <div className='general-info'>
          <div className='general-info-language'>
            <label>Languages:
              <select className='language-dropdown'>
                <option value='select one'>Select a Language</option>
                <option value='Sinhala'>Sinhala</option>
                <option value='English'>English</option>
                <option value='Tamil'>Tamil</option>
                <option value='Chineese'>Chineese</option>
              </select>
            </label>
          </div>

          <div className='general-info-timezone'>
            <label>Timezone:
              <select className='timezone-dropdown'>
                <option value='select one'>Select a Timezone</option>
                <option value='UTC+5:30'>UTC+5:30</option>
                <option value='UTC+5:45'>UTC+5:45</option>
                <option value='UTC+6'>UTC+6</option>
                <option value='UTC+6:30'>UTC+6:30</option>
                <option value='UTC+7'>UTC+7</option>
                <option value='UTC+8'>UTC+8</option>
                <option value='UTC+9'>UTC+9</option>
                <option value='UTC+9:30'>UTC+9:30</option>
                <option value='UTC+10'>UTC+10</option>
                <option value='UTC+11'>UTC+11</option>
              </select>
            </label>
          </div>

          <div className='general-info-currancy'>
            <label>Currency:
              <select className='currency-dropdown'>
                <option value='select one'>Select a Currency</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='GBP'>GBP</option>
                <option value='INR'>INR</option>
              </select>
            </label>
          </div>

          <div className='general-info-datefomat'>
            <label>Date Format:
              <select className='dateformat-dropdown'>
                <option value='select one'>Select a Date Format</option>
                <option value='dd/mm/yyyy'>dd/mm/yyyy</option>
                <option value='mm/dd/yyyy'>mm/dd/yyyy</option>
                <option value='yyyy/mm/dd'>yyyy/mm/dd</option>
              </select>
            </label>
          </div>

          <div className='general-info-theme'>
            <label>Theme:
              <select className='theme-dropdown'>
                <option value='select one'>Select a Theme</option>
                <option value='dark'>Dark</option>
                <option value='light'>Light</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className='general-footer'>
        <button type='submit'>Save Changes</button>
        <button type='reset'>Reset</button>
      </div>
    </div>
  )
}

export default GeneralSettings
