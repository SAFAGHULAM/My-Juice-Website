const ContactPage = ()=>{
    return(
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    )
}

export default ContactPage