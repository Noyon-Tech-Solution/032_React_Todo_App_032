import React from 'react'
import { faqData } from './data'
import FAQ from './FAQ'

export default function Home() {
  return (
    <div>
      <section>
        <h1>Faq Questions</h1>
        <h4>
            {faqData.map(faq=> <FAQ key={faq.id} {...faq}/>)}
        </h4>
      </section>
    </div>
  )
}
