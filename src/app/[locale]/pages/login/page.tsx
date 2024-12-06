import React from "react";
import SignIn from "@/app/adminpage/signin_signup/signin/SignIn";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["landingPage"];

const page = async({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <SignIn />
      </TranslationsProvider>
    </>
  );
};

export default page;