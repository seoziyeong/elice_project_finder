import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Head from "next/head";
interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>찾아줄게</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Wrapper>
        <Page>{children}</Page>
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Page = styled.div`
  margin: 184px auto 96px auto;
  flex: 1;
`;