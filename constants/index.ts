import backArrow from "@/assets/icons/back-arrow.png";
import close from "@/assets/icons/close.png";
import email from "@/assets/icons/email.png";
import google from "@/assets/icons/google.png";
import lock from "@/assets/icons/lock.png";
import person from "@/assets/icons/person.png";
import profile from "@/assets/icons/profile.png";
import like from "@/assets/icons/like.png";
import check from "@/assets/images/check.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import signUpTop from "@/assets/images/signup-top.png";
import background from "@/assets/images/background.png";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  signUpTop,
  check,
  background,
};

export const icons = {
  backArrow,
  close,
  email,
  google,
  lock,
  person,
  profile,
  like,
};

export const onboarding = [
  {
    id: 1,
    title: "Graj z przyjaciółmi!",
    description: "Zaproś ich do swojej imprezy i bawcie się z Questie",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Zgarniaj nagrody!",
    description: "Graj wraz ze społecznością Questie i wygrywaj",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Zdobywaj punkty!",
    description: "Wymieniaj punkty na kategorie i baw się bez ograniczeń",
    image: images.onboarding3,
  },
];

export const data = {
  onboarding,
};
