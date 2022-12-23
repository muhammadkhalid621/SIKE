import Quiz from "./Quiz";
import anxietData from "../anxiety.json"

const PTSDQuiz = () => {
    console.log('hello12132')
  return <Quiz data={anxietData} answer='PTSD'/>;
};

const DepressionQuiz = () => {
  console.log('hello12132')
return <Quiz data={anxietData} answer='Depression'/>;
};

const AnxietyQuiz = () => {
  console.log('hello12132')
return <Quiz data={anxietData} answer='Anxiety'/>;
};

const EatingQuiz = () => {
  console.log('hello12132')
return <Quiz data={anxietData} answer='Eating Disorder'/>;
};


const AddictionQuiz = () => {
  console.log('hello12132')
return <Quiz data={anxietData} answer='Addiction Disorder'/>;
};

const StealingQuiz = () => {
  console.log('hello12132')
return <Quiz data={anxietData} answer='Stealing Disorder'/>;
};

const BurningDisorder = () => {
  console.log('hello12132')
return <Quiz data={anxietData} answer='Burning Disorder'/>;
};

const BiPolarDisorder = () => {
  console.log('hello12132')
return <Quiz data={anxietData} answer='Bipolar Disorder'/>;
};

export  {
  PTSDQuiz,
  DepressionQuiz,
  AnxietyQuiz,
  EatingQuiz,
  AddictionQuiz,
  StealingQuiz,
  BurningDisorder,
  BiPolarDisorder,
};
