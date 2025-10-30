import React from "react"
import Container from "../../components/layout/Container"
import PageHeader from "../../components/common/PageHeader"

export default function AI_Network_Solutions() {
  return (
    <>
      <PageHeader
        title="AI-Powered Network Solutions"
        subtitle="Transform your enterprise network into an intelligent, adaptive, and self-healing ecosystem — powered by artificial intelligence."
        image="https://images.unsplash.com/photo-1637389291180-4e38bb23b80e?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Redefining the Future of Enterprise Networking
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Traditional networks react to change. <span className="font-semibold text-sky-600">AI-Powered Networks</span> anticipate it.
              Our intelligent systems leverage real-time analytics, automation, and machine learning
              to ensure your network remains secure, scalable, and efficient — no matter the demand.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
            What Makes Our AI Network Solutions Different?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Optimization",
                desc: "Continuously learns from network traffic and automatically adjusts configurations for peak performance.",
                icon: "⚡",
              },
              {
                title: "Predictive Intelligence",
                desc: "Detects anomalies before they become issues — reducing downtime and increasing reliability.",
                icon: "🧠",
              },
              {
                title: "Zero-Touch Automation",
                desc: "Streamline management with AI-assisted orchestration and automated network updates.",
                icon: "🤖",
              },
              {
                title: "Adaptive Security",
                desc: "AI identifies and mitigates potential threats using behavioral analytics and pattern recognition.",
                icon: "🔐",
              },
              {
                title: "Smart Visibility",
                desc: "Comprehensive dashboards and reports give actionable insights for better decision-making.",
                icon: "📊",
              },
              {
                title: "Cloud-Native Architecture",
                desc: "Designed for scalability, flexibility, and integration with hybrid or multi-cloud environments.",
                icon: "☁️",
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
  <Container>
    <div className="max-w-5xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        AI Network Solutions in Action
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
        From large-scale enterprises to data-driven startups, our AI technology
        powers smarter, faster, and more reliable networks.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: "🏢",
          title: "Enterprise Connectivity",
          desc: "Manage complex network topologies across multiple branches with unified visibility and self-correcting intelligence.",
        },
        {
          icon: "🌐",
          title: "Cloud & Edge Optimization",
          desc: "Optimize cloud-to-edge communication with AI-driven load balancing, latency reduction, and fault-tolerant routing.",
        },
        {
          icon: "🧩",
          title: "IoT Network Management",
          desc: "Handle thousands of connected IoT devices with real-time anomaly detection, bandwidth control, and energy-efficient routing.",
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
                alt="AI Network Visualization"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Powered by Intelligent Network Architecture
              </h2>
              <p className="text-slate-600 mb-5">
                Our AI platform integrates seamlessly into your existing
                infrastructure — from routers to cloud systems. It collects data
                from every node, applies deep learning algorithms, and generates
                actionable insights in real-time.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Deep learning-based traffic prediction</li>
                <li>Real-time adaptive routing mechanisms</li>
                <li>Behavioral anomaly detection & response</li>
                <li>Centralized AI control panel</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Elevate Your Network with Artificial Intelligence
          </h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Stay ahead of the curve with AI-driven intelligence that monitors,
            predicts, and secures your network 24/7. Our solutions scale with
            your growth — from startups to global enterprises.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Request a Free Consultation
          </a>
        </Container>
      </section>
    </>
  )
}
