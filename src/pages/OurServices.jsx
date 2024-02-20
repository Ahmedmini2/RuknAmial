import { Footer } from "@/widgets/layout";
import i18next from "../services/i18next";
import { useTranslation } from "react-i18next";

export function OurServices() {
    const [t] = useTranslation()

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/bg2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">

      <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
      {/* Code block starts */}
      <dh-component>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p tabIndex={0} className="focus:outline-none uppercase text-lg text-center text-gray-600 leading-4">{t('our_experience')}</p>
              <hh1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">{t('our_experience_title')}</hh1>
            </div>
            <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
              <div tabIndex={0} aria-label="card 1" className={`focus:outline-none flex sm:w-full md:w-5/12  pb-20  ${t('rtl1')} ${t('rtl2')} ${t('rtl3')} `}>
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-gray-100 rounded w-16 h-16 mt-2 mr-1"/>
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">{t('precast')}</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">{t('precast_text')}</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 2" className={`focus:outline-none flex sm:w-full md:w-5/12  pb-20 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')} `}>
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-gray-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">{t('communications')}</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">{t('communications_text')}</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 3" className={`focus:outline-none flex sm:w-full md:w-5/12  pb-20 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')} `}>
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-gray-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">{t('foundry')}</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">{t('foundry_text')}</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 4" className={`focus:outline-none flex sm:w-full md:w-5/12  pb-20 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')} `}>
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-gray-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">{t('manage')}</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">{t('manage_text')}</p>
                </div>
              </div>
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
  );
}

export default OurServices;
