import { Footer } from "@/widgets/layout";
import i18next from "../services/i18next";
import { useTranslation } from "react-i18next";

export function TermsandConditions() {
    const [t] = useTranslation()

  return (
    <>
      <section className="relative block h-[30vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">

      <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
      {/* Code block starts */}
      <dh-component>
        <section className={`max-w-8xl mx-auto container whitespace-pre-line font-semibold text-base ${t('rtl1')} ${t('rtl2')} ${t('rtl3')}`}>
        <p className="">{t('terms_and_conditions_text')}</p>  
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

export default TermsandConditions;
