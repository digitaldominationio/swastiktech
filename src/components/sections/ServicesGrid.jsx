import React from "react"
import { SERVICES } from "../../data/services"
import Card from "../ui/Card"
import Button from "../ui/Button"
import { Link } from "react-router-dom"
import Container from "../layout/Container"

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-14 bg-slate-50" id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Core Services
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Explore our range of enterprise-grade solutions engineered for
            performance, security, and scalability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((srv) => (
            <Card
              key={srv.id}
              title={srv.title}
              footer={
                <Link to={srv.slug}>
                  <Button variant="ghost" className="text-accent font-semibold">
                    Learn More →
                  </Button>
                </Link>
              }
            >
              {srv.short}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
