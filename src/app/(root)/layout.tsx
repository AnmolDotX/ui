import Footer from '@/components/layout/Footer';
import { GridWrapper } from '@/components/layout/GridWrapper';
import Header from '@/components/layout/Header';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata();

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GridWrapper>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </GridWrapper>
  );
};

export default HomeLayout;
