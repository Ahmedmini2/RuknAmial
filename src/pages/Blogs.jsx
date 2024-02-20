import React from 'react'
import { Footer } from "@/widgets/layout";
import { useTranslation } from "react-i18next";

const Blogs = () => {
    const [t] = useTranslation()
  return (
    <>
    <section className="relative block h-[50vh]">
      <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
      <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
    </section>
    <section className="relative bg-blue-gray-50/50 py-2 px-4">

    <div className="pb-2" style={{ fontFamily: '"Lato", sans-serif' }}>
    {/* Code block starts */}
    <dh-component>
      <section className="max-w-8xl mx-auto container ">
      
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
 
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">{t('blogs')}</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">{t('blogs_title')}</p>
  </div>
  
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
   
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          Announcing a free plan for small teams
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-gray-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
   

   
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          How Google Assistant now helps you record stories for kids
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          Google is constantly updating its consumer AI, Google Assistant, with new features.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-gray-200">By Aaron Larsson</h5>
        </div>
      </div>
    </a>
   

   
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80" alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          Front accounts - let's work together
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
          Are you an accountant? Are you a company formation advisor?
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-gray-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
   
  </div>
 
</div>

      </section>
    </dh-component>
    {/* Code block ends */}
  </div>
   

    </section>
    
    <div className="bg-blue-gray-50/50">
      <Footer />
    </div>
  </>
  )
}

export default Blogs