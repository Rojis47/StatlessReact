import CharacterCards from './Components/CharacterCards';
import Header from './Components/Header';
import CharRows from './Components/CharRows.tsx';
import { data } from './fma-data.ts';
import '../style.css';

const sortedCharacters = data.sort((a, b) => b.votes - a.votes);
const top5Characters = sortedCharacters.slice(0, 5);

function App() {
  return (
    <>
      <Header />

      {/* i could make this all into a component */}
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {top5Characters.map((character, i) => (
              <CharRows character={character} key={character.name} index={i} />
            ))}
          </tbody>
        </table>
      </section>

      <section id="character-cards">
        {data.map((character) => (
          <CharacterCards character={character} key={character.name} />
        ))}
      </section>
    </>
  );
}

export default App;
