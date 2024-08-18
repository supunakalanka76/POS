import React from 'react'
import Settings from './Settings'
import './Settings.css';
import 'material-icons/iconfont/material-icons.css';

function Support() {
  return (
    <div className='support-settings'>
      <div className='support-settings-header'>
      <Settings/>
      <h2>Support</h2>
      </div>
      <div className='support-settings-content'>

        <div className='support-settings-search'>
          <h2>Hello, How Can we help you?</h2>
          <input type="text" placeholder="Ask a Question..."/>
          <button className='btn-search'>Search</button>
        </div>

        <div className='support-settings-box'>

          <div className='support-box'>
            <div className='support-box-left'>
              <h2>Getting Started</h2>
            </div>
            <div className='support-box-right'>
              <span className='material-icons support-icon'>description</span>
            </div>
          </div>

          <div className='support-box'>
            <div className='support-box-left'>
              <h2>Pricing & Plans</h2>
            </div>
            <div className='support-box-right'>
              <span className='material-icons support-icon'>request_quote</span>
            </div>
          </div>

          <div className='support-box'>
            <div className='support-box-left'>
              <h2>Property Question</h2>
            </div>
            <div className='support-box-right'>
              <span className='material-icons support-icon'>subtitles</span>
            </div>
          </div>

          <div className='support-box'>
            <div className='support-box-left'>
              <h2>Usage Guide</h2>
            </div>
            <div className='support-box-right'>
              <span className='material-icons support-icon'>menu_book</span>
            </div>
          </div>
        </div>

        <div className='support-settings-footer'>

          <div className='support-settings-left'>
            <h2>Frequently Asked Qusestions</h2>
            <div className='support-settings-left-info'>
              <p>Purchasig Process?</p>
              <span className='material-icons add-icon'>add</span>
            </div>
            <div className='support-settings-left-info'>
              <p>How to apply for a property?</p>
              <span className='material-icons add-icon'>add</span>
            </div>
          </div>

          <div className='support-settings-right'>
            <h2>You still have a question?</h2>
            <p>If you can't find answer to your question, fill your query & submit it, or you can always contact us. We answer to you shortly.</p>
            <div className='support-settings-right-box'>
              <div className='support-footer-box'>
              <div className='support-settings-box-info'>
                <span className='material-icons footer-icon'>phone_in_talk</span>
                <h3>(+94) 785 766 794</h3>
              </div>
              </div>

              <div className='support-footer-box'>
              <div className='support-settings-box-info'>
                <span className='material-icons footer-icon'>mail</span>
                <h3>support@supun.com</h3>
              </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support
