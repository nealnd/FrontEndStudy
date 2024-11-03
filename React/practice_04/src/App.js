import data from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {data.map((item) => (
          <Question data={item} key={item.id}></Question>
        ))}
      </section>
    </main>
  );
}

export default App;
