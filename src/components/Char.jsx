import { useScroll, useTransform, motion, useInView } from 'framer-motion';

const Char = ({ wrapperRef, children, index, charactersLength }) => {
  const { scrollYProgress } = useScroll({ target: wrapperRef });
  const startingPosition = index / (charactersLength + 5);
  const endingPosition = (index + 5) / (charactersLength + 5);
  const opacity = useTransform(
    scrollYProgress,
    [startingPosition, endingPosition],
    [0.2, 1]
  );

  const inView = useInView(wrapperRef)

  return <motion.span style={{ opacity }}>{inView && children}</motion.span>;
};

export default Char;
