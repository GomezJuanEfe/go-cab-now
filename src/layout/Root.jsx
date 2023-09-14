import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ValidateElement from '../components/ValidateElement';

const Root = () => {
  const validPathsHeader = [
    '/',
    '/cab-list',
    '/cab-booking',
    '/payments',
    '/success',
    '/failedpage',
    '/verify-account/:token',
  ];
  const validPathsFooter = validPathsHeader;
  return (
    <>
      <ValidateElement
        validPaths={validPathsHeader}
      >
        <Header />
      </ValidateElement>
      <main>
        <Outlet />
      </main>
      <ValidateElement
        validPaths={validPathsFooter}
      >
        <Footer />
      </ValidateElement>
    </>
  );
};

export default Root;
