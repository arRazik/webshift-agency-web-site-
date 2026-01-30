import React from 'react'
import FormsContact from '../forms/FormsContact'

function Contact({ t }) {
  return (
    <div className='py-24'>
      <h2 className="text-5xl text-center font-bold mb-6">{t.contactTitle}</h2>
      <p className="text-gray-400 text-center text-xl mb-12">{t.ditialContact}</p>
      <FormsContact t={t} />
    </div>
  )
}

export default Contact
