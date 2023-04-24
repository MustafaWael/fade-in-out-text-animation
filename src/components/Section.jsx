import { AnimatePresence, useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import useSplitText from '../hooks/useSplitText';
import Char from './Char';

const Section = ({ textAnimation = '', title = '' }) => {
  const wrapperRef = useRef(null);
  const { charactersArray } = useSplitText(textAnimation);
  const inView = useInView(wrapperRef);

  return (
    <section className="wrapper-section" ref={wrapperRef}>
      <div className="sticky">
        <h1>{title}</h1>
        <p>
          {charactersArray.map((character, index) => (
            <Char
              key={character + index}
              wrapperRef={wrapperRef}
              index={index}
              charactersLength={charactersArray.length}
              inView={inView}
            >
              {character}
            </Char>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Section;
