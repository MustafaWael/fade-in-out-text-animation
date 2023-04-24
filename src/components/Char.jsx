import { useScroll, useTransform, motion } from 'framer-motion';

const Char = ({ wrapperRef, children, index, charactersLength }) => {
  const { scrollYProgress } = useScroll({ target: wrapperRef });
  const startingPosition = index / (charactersLength + 1);
  const endingPosition = (index + 1) / (charactersLength + 1);
  const opacity = useTransform(
    scrollYProgress,
    [startingPosition, endingPosition],
    [0.2, 1]
  );

  return (
    <motion.span
      style={{
        opacity,
      }}
    >
      {children}
    </motion.span>
  );
};

export default Char;
