import '../../character-ratings.css';
import { Character } from '../fma-data.ts';

type tableProps = {
  character: Character;
  index: number;
};

function CharRows({ character: { name, skillset, votes }, index }: tableProps) {
  return (
    <tr className={index % 2 === 0 ? 'dark' : 'light'}>
      <td>{name}</td>
      <td>{skillset}</td>
      <td>{votes}</td>
    </tr>
  );
}

export default CharRows;
