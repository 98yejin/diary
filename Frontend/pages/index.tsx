import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';

export default function Home() {
  const Container = tw.div`
    inline-flex
    items-center
    p-2
    text-indigo-500
`;

  return <Container>Hello World</Container>;
}
