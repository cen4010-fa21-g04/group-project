import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p>About</p>
      <ul>
        {ids.map((id) => (
          <li>
            <Link to={`${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ids: Array<string | undefined> = [
  "sluongo2022",
  "icosta2021",
  "jbadalcampbe2020",
  "sshank2018",
  "brudowitz2021",
];
