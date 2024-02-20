import { Footer } from "@/widgets/layout";
import { useTranslation } from "react-i18next";

export function AboutUs() {
  const [t] = useTranslation()
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/bg3.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

          <div class={`md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')}`}>
            <div>
              <img class="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/  >
            </div>


            <div class="mt-5 sm:mt-10 lg:mt-0">
              <div class="space-y-6 sm:space-y-8">

                <div class="space-y-2 md:space-y-4">
                  <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    {t('about_us_main_title1')}
                  </h2>
                  <p class="text-gray-500 text-lg">
                  {t('about_us_main_text1')}
                  </p>
                </div>



                <ul role="list" class="space-y-2 sm:space-y-4">
                  <li class={`flex space-x-3 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')}`}>

                    <svg class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
                      <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                    </svg>


                    <span class="text-sm sm:text-base text-gray-500">
                      {t('about1')}
                    </span>
                  </li>

                  <li class={`flex space-x-3 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')}`}>

                    <svg class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
                      <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                    </svg>


                    <span class="text-sm sm:text-base text-gray-500">
                    {t('about2')}
                    </span>
                  </li>

                  <li class={`flex space-x-3 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')}`}>

                    <svg class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
                      <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                    </svg>


                    <span class="text-sm sm:text-base text-gray-500">
                    {t('about3')}
                    </span>
                  </li>
                </ul>
        
              </div>
            </div>

          </div>
        
        </div>

      </section>
      <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className={`flex flex-col lg:flex-row justify-between gap-8 ${t('rtl1')} ${t('rtl2')} ${t('rtl3')}`}>
                <div className={`w-full lg:w-5/12 flex flex-col justify-center `}>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">{t('about_company')}</h1>
                    <p className="font-normal text-lg leading-relaxed  text-gray-600 ">{t('about_company_text')}</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className={`w-full lg:w-12/12 flex flex-col justify-center ${t('rtl1')} ${t('rtl2')} ${t('rtl3')}`}>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">{t('our_history')}</h1>
                    <p className="font-normal text-xl leading-relaxed  text-gray-600 ">{t('our_history_text')}</p>
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

export default AboutUs;
