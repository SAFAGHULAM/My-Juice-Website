const MorePage = () =>{
    const faqs=[
        {
            question:"Are your juices freshly made?",
            answer:"Yes, our juices are freshly made every day using high-quality, natural ingredients to ensure maximum freshness and flavor. We never use preservatives or artificial additives."
        },
        {
            question:"Do you use organic ingredients?",
            answer:"Yes, we prioritize using organic ingredients in our juices whenever possible to ensure they are healthy, natural, and free from harmful chemicals."
        },
        {
            question:"Are your juices cold-pressed?",
            answer:"Yes, our juices are cold-pressed to preserve their natural nutrients, flavors, and freshness without using heat or additives."
        },
        {
            question:"Do you offer delivery or pickup services?",
            answer:"Yes, we offer both delivery and pickup services for your convenience. You can choose your preferred option at checkout."
        },
        {
            question:"Can I customize my juice?",
            answer:"Yes, you can customize your juice by choosing from a variety of fruits, vegetables, and add-ins to create your perfect blend. Just let us know your preferences!"
        },
        {
            question:"Do you have sugar-free options?",
            answer:"Yes, we offer sugar-free options made with only natural fruits and vegetables, so you can enjoy a refreshing, healthy drink without any added sugar."
        },
        {
            question:"What payment methods do you accept?",
            answer:"We accept major credit/debit cards, digital wallets, and cash for in-store purchases."
        }
    ]
    return (
        <div className="bg-gray-50 py-12 px-6 lg:px-24">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <h2 className="text-lg font-semibold text-gray-700">
                  {faq.question}
                </h2>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      );
}
export default MorePage