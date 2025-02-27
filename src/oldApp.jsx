import Contact from "./Contact";
import Counter from "./Counter";
import Hello from "./hello";

function App() {  
  const helloData = [
    { name: "Napat",message: "Hi there", }, 
    { name: "John",message: "Hello...", }
  ];
  return (
    <div className="App">
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="s6406021622036@email.kmutnb.ac.th" phone="099-999-9999" />
    </div>
  );
}
export default App;