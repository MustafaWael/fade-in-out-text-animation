import { useScroll, useTransform, motion, useWillChange } from 'framer-motion';

const Char = ({ wrapperRef, children, index, charactersLength }) => {
  const willChange = useWillChange();
  const { scrollYProgress } = useScroll({ target: wrapperRef });
  const startingPosition = index / (charactersLength + 5);
  const endingPosition = (index + 5) / (charactersLength + 5);
  const opacity = useTransform(
    scrollYProgress,
    [startingPosition, endingPosition],
    [0.2, 1]
  );

  return <motion.span style={{ opacity, willChange }}>{children}</motion.span>;
};

export default Char;
