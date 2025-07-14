import React from 'react'

const TaxPay = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 min-h-screen text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-orange-500 text-center">Tax Pay Demo</h2>
      <iframe
        src="https://drive.google.com/file/d/14ARaje09HP4tqVtcBKrXeXNCZ1VNU2VU/preview"
        width="700"
        height="400"
        allow="autoplay"
        className="rounded-lg shadow-lg border-2 border-orange-500"
      ></iframe>
      <p className="mt-6 text-slate-300 text-center">Replay of the Tax Pay project in action.</p>
    </section>
  )
}

export default TaxPay