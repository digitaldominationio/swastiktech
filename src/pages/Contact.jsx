import React from "react"
import PageHeader from "../components/common/PageHeader"
import ContactForm from "../components/sections/ContactForm"

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or project in mind? Let’s connect."
      />
      <ContactForm />
    </>
  )
}
