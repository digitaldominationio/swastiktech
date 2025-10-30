import React from "react"
import Container from "../layout/Container"

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-slate-900 text-white py-20 md:py-28 text-center">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </Container>
    </section>
  )
}
