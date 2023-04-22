import Section from './components/Section.jsx';

const sections = [
  {
    title: "The Importance of Web Development in Today's Digital World",
    text: 'Discover the fundamental skills every web developer should know, including HTML, CSS, JavaScript, and more, to create stunning websites and engaging user experiences.',
  },
  {
    title: 'Web Development: A Crucial Component of the Digital World',
    text: "With the rise of the internet, web development has become an essential skill for businesses and individuals. This article will explore the significance of web development in today's society and how it can help businesses succeed in the digital marketplace.",
  },
  {
    title: 'The Vital Role of Web Development in the Digital Age',
    text: 'Web development is crucial in the digital world, as it enables businesses to create user-friendly websites and engaging online experiences. This article will discuss the significance of web development and its impact on the success of businesses in the digital marketplace.',
  },
];

function App() {
  return (
    <>
      {sections.map(({ title, text }) => (
        <Section title={title} textAnimation={text} />
      ))}
    </>
  );
}

export default App;
