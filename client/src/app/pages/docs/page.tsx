import FAQAccordion from '@/components/cultureui/Accordion/FaqAccordion';
import React from 'react'
import { faqs } from '@/components/cultureui/Accordion/resources/FaqData';



const Docs = () => {
  return (
    <section className='max-w-[700px] h-auto m-auto my-16 p-4'>
        <div className='flex flex-col gap-5 mt-4'>
            <h2 className='text-[32px] font-bold text-[var(--text-color-secondary)]'>Introduction</h2>
            <p className='text-[14px] font-semibold text-[var(--text-color-primary)]'>CultureUI is a modern, well-designed component library built to deliver accessible, customizable, and production-ready solutions.
            </p >
            <p className='text-[14px] font-semibold text-[var(--text-color-primary)]' >Our components are developed and distributed through npm, allowing for easy and scalable integration into your projects.</p>
        </div>
        <div className='flex flex-col gap-5 mt-5'>
            <h2 className='text-[32px] font-bold text-[var(--text-color-secondary)]'>How does it work?</h2>
            <p className='text-[14px] font-semibold text-[var(--text-color-primary)]'>is not just a collection of components, but a tool that helps you build consistent and high-performance interfaces. You can install the library and take advantage of its flexibility and ongoing maintenance.</p>
            <p className='text-[14px] font-semibold text-[var(--text-color-primary)]'>Our priority is to provide you with reusable components that fit your needs, without sacrificing quality or accessibility.</p>
        </div>
        <div className='flex flex-col gap-5 mt-8'>
            <h2 className='text-[32px] font-bold text-[var(--text-color-secondary)]'>FAQ</h2>
        </div>
        <div className='mt-5'>
          <FAQAccordion
          data={faqs}
          />
        </div>
    </section>
  )
}
export default Docs; 