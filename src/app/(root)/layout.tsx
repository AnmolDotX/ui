import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | BabaCreates',
    default: 'BabaCreates',
  },
  description: 'Multiple theme UI library developed by https://babacreates.in',
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
