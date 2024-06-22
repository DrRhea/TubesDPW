import React from 'react'
import Header from '../Components/Header'
import Footer from './../Components/Footer'
import Form from './../Contact/Form'
import Map from './../Contact/Map'
import Faq from '@/Contact/Faq'

const Contact = ({ faqs }) => {
  return (
    <div className="font-poppins text-slate-900">
      <Header />
      <Map />
      <Faq faqs={faqs} />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
