import React from "react"
import Container from "../../components/layout/Container"
import PageHeader from "../../components/common/PageHeader"

export default function AV_UC_Collaboration() {
  return (
    <>
      <PageHeader
        title="Audio-Video / UC & Collaboration"
        subtitle="Transforming the modern workplace with smart conferencing, unified communication, and seamless collaboration experiences."
        image="https://images.unsplash.com/photo-1603791452906-bb9a28f3de9b?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Connect. Communicate. Collaborate — Smarter.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In a hybrid and digital-first world, communication is the
              cornerstone of success.{" "}
              <span className="text-sky-600 font-semibold">SwastikTech</span>{" "}
              delivers next-generation Audio-Video and Unified Communication (UC)
              solutions designed to enable effortless collaboration across teams,
              locations, and time zones.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Offerings Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
            Our Key Offerings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎥",
                title: "Smart Conferencing Solutions",
                desc: "High-definition video conferencing systems with AI-driven camera tracking, noise cancellation, and real-time collaboration tools.",
              },
              {
                icon: "📞",
                title: "Unified Communication (UC) Systems",
                desc: "Integrate voice, video, chat, and meetings into one platform for simplified enterprise-wide collaboration.",
              },
              {
                icon: "💻",
                title: "Hybrid Meeting Rooms",
                desc: "Enable seamless collaboration between in-office and remote participants with intelligent AV setups and control systems.",
              },
              {
                icon: "🎧",
                title: "Enterprise VoIP & Cloud Telephony",
                desc: "Scalable, secure voice solutions that reduce costs and improve call quality with SIP-based cloud communication.",
              },
              {
                icon: "🧠",
                title: "AI-Enhanced Collaboration Tools",
                desc: "Empower meetings with real-time transcription, facial recognition, and smart scheduling assistance.",
              },
              {
                icon: "🏢",
                title: "Custom AV Design & Integration",
                desc: "Tailored audio-visual experiences for boardrooms, training centers, and auditoriums with intuitive user interfaces.",
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
        Collaboration Solutions for Every Environment
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
        Our intelligent AV and Unified Communication systems are designed to
        transform how people connect, share, and collaborate — from small huddle
        rooms to enterprise-wide global conferencing environments.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: "🏢",
          title: "Corporate Offices",
          desc: "Enhance teamwork and communication with centralized UC platforms, HD video conferencing, and fully integrated AV control panels.",
        },
        {
          icon: "🏫",
          title: "Educational Institutions",
          desc: "Enable immersive hybrid learning through smart classrooms, lecture capture systems, and interactive digital whiteboards.",
        },
        {
          icon: "🏥",
          title: "Healthcare & Enterprises",
          desc: "Support telemedicine, remote consultations, and internal collaboration with high-quality, secure AV and UC infrastructures.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
                src="https://images.unsplash.com/photo-1581091870638-4f2b6b6f3bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Audio Video and Collaboration Technology"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Powered by Industry-Leading Collaboration Platforms
              </h2>
              <p className="text-slate-600 mb-5">
                Our AV & UC ecosystems are built using globally trusted
                platforms — including Microsoft Teams, Zoom, Cisco Webex,
                Poly, and Logitech — delivering reliable, immersive, and
                integrated communication experiences.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Integration with Microsoft Teams and Zoom Rooms</li>
                <li>4K video conferencing and smart camera systems</li>
                <li>IoT-enabled meeting room controls</li>
                <li>Centralized AV management dashboards</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Redefine the Way Your Teams Collaborate
          </h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Empower your organization with next-gen Audio-Video and Unified
            Communication systems that drive engagement, productivity, and
            innovation — wherever your teams work.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Schedule a Demo
          </a>
        </Container>
      </section>
    </>
  )
}
