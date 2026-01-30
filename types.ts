
export type Language = 'fr' | 'en' | 'ar';

export interface TranslationStrings {
  navHome: string;
  navAbout: string;
  navServices: string;
  navPortfolio: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroConsultant: string;
  aboutTitle: string;
  aboutText: string;
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
  whyUsTitle: string;
  whyUsItems: string[];
  servicesTitle: string;
  servicesSubtitle: string;
  serviceWebTitle: string;
  serviceWebDesc: string;
  serviceAppTitle: string;
  serviceAppDesc: string;
  serviceUIUXTitle: string;
  serviceUIUXDesc: string;
  serviceEcommerceTitle: string;
  serviceEcommerceDesc: string;
  serviceMaintenanceTitle: string;
  serviceMaintenanceDesc: string;
  processTitle: string;
  processSteps: { title: string; desc: string }[];
  contactTitle: string;
  contactSubtitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendBtn: string;
  whatsappBtn: string;
  aiAdvisorTitle: string;
  aiAdvisorPlaceholder: string;
  aiAdvisorAction: string;
  footerRights: string;
  aiNotFound: string;
  AiAdvisor: string;
  successMsg: string;
  errorMsg: string;
  ditialContact: string;
  propostaitle: string;
  propostadesc: string;
  projectsproposTitle1: string;
  projectsproposTitle2: string;
  projectsproposTitle3: string;
  projectsproposdisc1: string;
  projectsproposdisc2: string;
  projectsproposdisc3: string;
  servicetitel: string;
  servicedesc: string;



  
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}
