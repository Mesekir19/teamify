export default function Features() {
  const features = [
    {
      icon: "👥",
      title: "Team Collaboration",
      desc: "Real-time collaboration with document sharing and threaded comments",
      highlights: ["Version control", "Live editing", "Task assignments"],
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      desc: "Deep insights with customizable dashboards and reports",
      highlights: ["Real-time metrics", "Exportable data", "Team performance"],
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      desc: "Military-grade encryption and compliance certifications",
      highlights: ["2FA", "SSO", "Audit logs"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="flex justify-center text-4xl font-bold text-white mb-4">
          Powerful <h2 className="text-amber-400 ml-2">Features </h2>
        </h2>
        <p className="text-xl text-white">
          Everything you need to manage modern teams
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-6">{feature.icon}</div>
            <h3 className="text-2xl text-white font-bold mb-4">{feature.title}</h3>
            <p className="text-white mb-6">{feature.desc}</p>
            <ul className="space-y-2">
              {feature.highlights.map((item) => (
                <li key={item} className="flex items-center text-amber-400">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-amber-600 to-white/10 rounded-2xl p-12 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to transform your team?
        </h3>
        <button className="bg-amber-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}
