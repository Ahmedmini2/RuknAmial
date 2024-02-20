import { Footer } from "@/widgets/layout";
import React,{ useState , Fragment, useRef, }from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'



export function ContactUs() {
  const [t] = useTranslation()
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    var valuess = new FormData();
    valuess.append('name', data.name);
    valuess.append('email', data.email);
    valuess.append('message', data.message);
    axios.post("https://app.ruknamial.com/RuknamailAPI/v1/contact/contact.php", valuess).then((response) => {
      console.log(response.status, response.data);
      setOpen(true)
    });
  };



  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex flex-col items-center">
                    <div className="mx-auto flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-24 sm:w-24">
                      <CheckCircleIcon className="h-16 w-16 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-4 text-center sm:ml-4 sm:mt-2 sm:text-center">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {t('message_success_title')}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        {t('message_success_text')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex items-center justify-center sm:px-6">
                  
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    {t('message_button')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/bg1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">

      <div className="relative mx-auto w-full max-w-7xl bg-white text-gray-700">
      <div className="grid grid-cols-2">
        
        {/* :MAP CONTAINER */}
        <div className="order-1 col-span-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.6414593882607!2d46.77909218992539!3d24.68279933640113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f06e64a73b12b%3A0x7d65b7766f56f673!2zUlFXQTY0MTAsIDY0MTAgQWwgQmFycSwgMjQ4NNiMINit2Yog2KfZhNix2YjYp9io2YrYjCBSaXlhZGggMTQyMTUsIFNhdWRpIEFyYWJpYQ!5e0!3m2!1sen!2sae!4v1699437613932!5m2!1sen!2sae" 
            title="map" scrolling="no" frameborder="0"
            width="100%" height="300px"
            className="" 
            loading="lazy" 
          />
        </div>



        {/* :CONTACT FORM CONTAINER */}
        <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <form action="" className="mx-auto max-w-xl space-y-4" onSubmit={handleSubmit}>
            {/* ::Name Input */}
            <div>
              {/* :::label */}
              <label htmlFor="name" className="sr-only">{t('name')}</label>
              {/* :::input */}
              <input  type="text" id="name" name="name"
                value={data.name}
                onChange={handleChange}
                placeholder={t('your_name')}
                className={`form-input w-full  block shadow-sm rounded p-2 border-gray-400 bg-white text-base placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 ${t('rtl2')}`}
              />
            </div>
            {/* ::Email Input */}
            <div>
              {/* :::label */}
              <label htmlFor="email" className="sr-only">{t('email')}</label>
              {/* :::input */}
              <input  type="email" id="email" name="email"
                value={data.email}
                onChange={handleChange}
                placeholder={t('your_email')}
                className={`form-input w-full block shadow-sm rounded p-2 border-gray-400 bg-white text-base placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 ${t('rtl2')}`}
              />
            </div>
            {/* ::Message Input */}
            <div className="col-span-full">
              {/* :::label */}
              <label htmlFor="message" className="sr-only">{t('message')}</label>
              {/* :::input */}
              <textarea  name="message" id="message" cols="30" rows="4"
                value={data.message}
                onChange={handleChange}
                placeholder={t('how_can_we_help')}
                className={`form-textarea resize-none  w-full shadow-sm rounded p-2 border-gray-400 bg-white text-base placeholder-gray-500 focus:border-green-400 focus:ring-green-400 ${t('rtl2')}`}
              ></textarea>
            </div>
            {/* ::Submit Button */}
            <div>
              <button type="submit" data-collapse-toggle="toast-success" className="py-2 px-6 rounded bg-orange-300 text-base text-white font-semibold uppercase hover:bg-black">Send Email </button>
                
            </div>
          </form>
        </div>



        {/* :CONTACT INFOS CONTAINER */}
        <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <div className={`mx-auto max-w-xl flex flex-col space-y-5 ${t('rtl2')}`} >
            {/* ::Title Contact Us */}
            <h2 className="text-4xl font-oswald uppercase">{t('contact_us')}</h2>
            {/* ::Text */}
            <p className="text-sm text-gray-500">{t('contact_us_text')}</p>
            <p className="text-sm text-gray-500">{t('contact_us_text2')}</p>
            {/* ::Email contact */}
            <a href="mailto:info@ruknamyal.com" className="items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
             
              info@ruknamial.com
            </a>
            {/* ::Address */}
            <p className="text-sm text-gray-500 leading-6">{t('address1')}<br />{t('address2')}<br /> {t('address3')}</p>
            {/* ::Socials */}
            <div className="flex items-center">
              {/* :Twitter */}
              <a href="#twitter" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125" style={{ backgroundColor: "#1DA1F2" }}>
                {/* ::twitter svg */}
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              {/* :FACEBOOK */}
              <a href="#facebook" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125" style={{ backgroundColor: "#4267B2" }}>
                {/* ::facebook svg */}
                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"/>
                </svg>
              </a>
              {/* :Instagram */}
              <a href="#instagrap" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125">
                {/* ::instagram svg */}
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

      </section>
     
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
