import casualImg from '../src/assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const objectProp = [
	{
    pathImg: "../src/assets/state-mgmt.png",
		title: "ffe",
		description: "femkremvr",
	},
	{
    pathImg: "../src/assets/components.png",
		title: "rfdvfe",
		description: "frevfdf",
	},
	{
		title: "ppcd",
		description: "vvvvsdffdfs",
	},
	{
		title: "sda",
		description: "qwewerwe",
	},
	{
		title: "plpllp",
		description: "yhyyhyhyhy",
	},
];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function PropsExample({ pathImg, title, description }) {
  return (
    <div>
      <img src={pathImg} alt='...' />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

function Header() {
  const randomWord = reactDescriptions[getRandomInt(2)]

	return (
		<header>
			<img src={casualImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{randomWord} Fundamental React concepts you will need for almost any app you
				are going to build!
			</p>
      <PropsExample
        pathImg={"../src/assets/jsx-ui.png"}
        title="Props"
        description="Binding of Dataa"
      />
      <br />
      <PropsExample {...objectProp[1]} />
      <PropsExample {...objectProp[2]} />
		</header>
	);
}

function App() {
	return (
		<div>
      <Header />
			<main>
				<h2>Time to get rted!</h2>
			</main>
		</div>
	);
}

export default App;
