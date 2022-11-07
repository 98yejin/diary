import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';

export default function Home() {
  const Container = tw.div`
    flex
    h-screen
  `;

  const ButtonGroup = tw.div`
    flex flex-col 
    justify-start
    h-full
  `;
  const CalendarTypeButton = tw.button`
    h-full
    px-1
    text-white 
    font-medium 
    text-xs 
    leading-tight 
    uppercase 
    rounded 
    shadow-md 
    hover:shadow-lg 
    focus:shadow-lg 
    focus:outline-none 
    focus:ring-0 
    active:shadow-lg 
    transition 
    duration-150 
    ease-in-out
  `;
  const ActivateButton = tw(CalendarTypeButton)`
    bg-gray-400
    hover:bg-gray-500 
    focus:bg-gray-500 
    active:bg-gray-500 
  `;

  const DeactivateButton = tw(CalendarTypeButton)`
    bg-gray-200
    hover:bg-gray-300 
    focus:bg-gray-300 
    active:bg-gray-300 
  `;

  return (
    <>
      <Container>
        <ButtonGroup role="group">
          <ActivateButton type="button">Month</ActivateButton>
          <DeactivateButton type="button">Week</DeactivateButton>
          <DeactivateButton type="button">Day</DeactivateButton>
        </ButtonGroup>
        <div> 캘린더 </div>
      </Container>
    </>
  );
}
