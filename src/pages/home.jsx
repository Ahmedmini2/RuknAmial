import React from "react";
import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  
  PresentationChartLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import i18next from "../services/i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Home() {
  const [t] = useTranslation()
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg-main.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
              {t('slogan')}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 ">
             {t('slogan_text')}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            
              <FeatureCard
                color="yellow"
                title={t('quality_and_performance')}
                icon={React.createElement(ArrowPathIcon, {
                  className: "w-5 h-5 text-white",
                })}
                description={t('quality_and_performance_text')}
              />
              <FeatureCard
                color="yellow"
                title={t('precision_in_every_detail')}
                icon={React.createElement(FingerPrintIcon, {
                  className: "w-5 h-5 text-white",
                })}
                description={t('precision_in_every_detail_text')}
              />
              <FeatureCard
                color="yellow"
                title={t('effective_time_management')}
                icon={React.createElement(StarIcon, {
                  className: "w-5 h-5 text-white",
                })}
                description={t('effective_time_management_text')}
              />
              
           
          </div>
          <div className={`mt-32 flex flex-wrap items-center  ${t('rtl1')} `}>
            <div className={`mx-auto -mt-8 w-full px-4 md:w-5/12  ${t('rtl2')} ${t('rtl3')}`}>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                {t('main_title')}
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              {t('main_text1')}
                <br />
                <br />
                {t('main_text2')}
              </Typography>
              <Link to="contact-us">
              <Button color="orange" variant="outlined">{t('contact_us')}</Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                   {t('image_title_main')}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  {t('image_title_text')}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-16">
        <div className="container mx-auto">
          <PageTitle heading={t('parteners_title')}>
            {t('parteners_text1')}
            {t('parteners_text2')}
          </PageTitle>
          <div className="container mx-auto pt-16">
            
            <div className="xl:py-4 lg:py-4 md:py-4 sm:py-4 px-15 flex flex-wrap">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src="img/companies/alajmi.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src="img/companies/aldfa.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                    <img src="img/companies/bester.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src="img/companies/ics.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                    <img src="img/companies/momar.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                    <img src="img/companies/sahab.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                    <img src="img/companies/smoos.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                    <img src="img/companies/uabco.png" alt />
                </div>
            </div>
        </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-4">
        <div className="container mx-auto">
          <PageTitle heading={t('company_goals_title')}>
            {t('company_goals_text')}
          </PageTitle>
          <div className="mx-auto mt-20 mb-12 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            
              <Card
                
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(StarIcon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {t('vision')}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {t('vision_text')}
                </Typography>
              </Card>
              <Card
                
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(PresentationChartLineIcon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {t('goal')}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {t('goal_text')}
                </Typography>
              </Card>
              <Card
                
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(RocketLaunchIcon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {t('values')}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {t('values_text')}
                </Typography>
              </Card>
            
          </div>
         
        </div>
      </section>
      {/* <section className="relative px-4 py-4">

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">{t('blogs')}</h2>
    <p class="mt-1 text-lg text-gray-600 dark:text-gray-400">{t('blogs_title')}</p>
  </div>



  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <a class="group rounded-xl overflow-hidden" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description"/>
        <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          Sponsored
        </span>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Studio by Preline
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
        </p>
        <p class={`mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium ${t('rtl2')} ${t('rtl3')}`} >
          {t('read_more')}
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p>
      </div>
    </a>



    <a class="group rounded-xl overflow-hidden" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
        </p>
        <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
        {t('read_more')}
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p>
      </div>
    </a>



    <a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]" href="#">
      <div class="flex-auto p-4 md:p-6">
        <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>
      </div>
      <div class="pt-0 p-4 md:p-6">
        <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
        {t('blogs')}
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </a>

  </div>

</div>

      </section> */}
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
