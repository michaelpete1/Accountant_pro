export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-heading text-primary mb-4">Contact Me</h1>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
