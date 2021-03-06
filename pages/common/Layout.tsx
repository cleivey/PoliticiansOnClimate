import React from 'react';
import Header from './Header';
import Footer from './Footer';

const withLayout = (Page: any) => {
  const LayoutWithProps = (props: any) => {
    return (
      <div>
        <Header />
        <Page {...props} />
        <Footer />
      </div>
    );
  };
  if (Page.getInitialProps) {
    LayoutWithProps.getInitialProps = async function(ctx: any) {
      let componentProps = {};
      componentProps = await Page.getInitialProps(ctx);

      return {
        ...componentProps,
      };
    };
  }

  return LayoutWithProps;
};

export default withLayout;
