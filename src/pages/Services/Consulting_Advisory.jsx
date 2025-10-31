import React from "react"
import Container from "../../components/layout/Container"
import PageHeader from "../../components/common/PageHeader"
import useScrollToTop from "../../hooks/useScrollToTop"

export default function Consulting_Advisory() {
  useScrollToTop();
  return (
    <>
      <PageHeader
        title="Consulting & Advisory"
        subtitle="Transform your business strategy with expert technology guidance, digital transformation, and IT roadmap planning."
        image="https://images.unsplash.com/photo-1531497865144-0464ef8fb9c5?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Strategic Guidance for a Smarter Digital Future
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              <span className="text-sky-600 font-semibold">SwastikTech’s Consulting & Advisory Services</span>{" "}
              empower organizations to align technology with business goals. We
              bring together strategic insights, digital innovation, and
              technical expertise to drive transformation, operational
              excellence, and long-term growth.
            </p>
          </div>
        </Container>
      </section>

      {/* 9 Key Capabilities Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
            Strategic Capabilities that Drive Business Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧭",
                title: "Digital Transformation Roadmaps",
                desc: "Create clear, phased transformation strategies to modernize your infrastructure and enhance digital maturity.",
              },
              {
                icon: "🏗️",
                title: "Enterprise Architecture Design",
                desc: "Develop scalable IT architectures that align with business processes, growth, and modernization goals.",
              },
              {
                icon: "💡",
                title: "IT Strategy & Planning",
                desc: "Bridge business objectives and technology initiatives through comprehensive IT strategy formulation.",
              },
              {
                icon: "📊",
                title: "Data & Analytics Advisory",
                desc: "Leverage actionable data insights to enhance decision-making and improve operational performance.",
              },
              {
                icon: "🔒",
                title: "Governance, Risk & Compliance (GRC)",
                desc: "Ensure compliance and reduce business risk through frameworks that promote accountability and security.",
              },
              {
                icon: "⚙️",
                title: "Process Optimization",
                desc: "Streamline workflows, automate tasks, and integrate digital tools to maximize operational efficiency.",
              },
              {
                icon: "👨‍💻",
                title: "Technology Assessment",
                desc: "Evaluate existing IT landscapes, identify inefficiencies, and recommend performance-driven solutions.",
              },
              {
                icon: "🤝",
                title: "Vendor & Cloud Strategy",
                desc: "Select the right technology partners and cloud solutions tailored to your business needs and budget.",
              },
              {
                icon: "🚀",
                title: "Innovation & Change Management",
                desc: "Enable a culture of innovation with agile methodologies and structured organizational change practices.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 Core Solutions Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Consulting & Advisory Solutions for Every Sector
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our consulting expertise spans industries — helping organizations
              of all sizes define, design, and deploy strategies that create measurable value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏢",
                title: "Enterprise Digital Strategy",
                desc: "Define technology-driven roadmaps that improve agility, operational efficiency, and competitive advantage.",
              },
              {
                icon: "🏭",
                title: "Manufacturing & Automation Advisory",
                desc: "Leverage IoT, AI, and automation to optimize production efficiency and reduce costs across facilities.",
              },
              {
                icon: "💳",
                title: "Financial & Banking Transformation",
                desc: "Modernize financial operations, strengthen data governance, and ensure compliance with evolving regulations.",
              },
              {
                icon: "🏥",
                title: "Healthcare & Life Sciences Consulting",
                desc: "Enable secure digital healthcare platforms and data-driven insights for better patient and operational outcomes.",
              },
              {
                icon: "☁️",
                title: "Cloud & Infrastructure Consulting",
                desc: "Assess workloads, plan migrations, and optimize cloud environments to deliver agility and cost efficiency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b7?auto=format&fit=crop&w=1200&q=80"
                alt="Consulting & Advisory Technology"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Data-Driven Decisions Powered by Experience
              </h2>
              <p className="text-slate-600 mb-5">
                Our consulting methodology is built on proven frameworks,
                analytical tools, and industry expertise. SwastikTech helps
                clients turn insights into actions — enabling transformation that
                is measurable, sustainable, and impactful.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Comprehensive business and IT assessments</li>
                <li>Tailored strategy design and execution support</li>
                <li>Cross-industry best practices and innovation models</li>
                <li>Outcome-focused digital transformation programs</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Empower Your Strategy with SwastikTech Consulting
          </h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Partner with our team of consultants and technology strategists to
            unlock business value, accelerate innovation, and shape the future of
            your enterprise.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Book a Consultation
          </a>
        </Container>
      </section>
    </>
  )
}
