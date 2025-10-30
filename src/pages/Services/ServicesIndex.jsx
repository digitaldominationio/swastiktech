import React from "react"
import Container from "../../components/layout/Container"
import PageHeader from "../../components/common/PageHeader"
import { SERVICES } from "../../data/services"
import { Link } from "react-router-dom"
import Button from "../../components/ui/Button"

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Explore our complete range of enterprise-grade solutions designed for performance, security, and scalability."
      />
      <section className="py-20 md:py-14 bg-slate-50">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-slate-800 mb-2">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{srv.short}</p>
                <Link to={srv.slug}>
                  <Button variant="ghost" className="text-accent">
                    Learn More →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
