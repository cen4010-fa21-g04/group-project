import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Brudowitz2021 from "./brudowitz2021";
import Icosta2021 from "./icosta2021";
import Jbadalcampbe2020 from "./jbadalcampbe2020";
import Sluongo2022 from "./sluongo2022";
import Sshank2018 from "./sshank2018";

const ids: Array<string | undefined> = [
  "sluongo2022",
  "icosta2021",
  "jbadalcampbe2020",
  "sshank2018",
  "brudowitz2021",
];

const components: { [key: string]: React.ReactElement } = {
  sluongo2022: <Sluongo2022 />,
  icosta2021: <Icosta2021 />,
  jbadalcampbe2020: <Jbadalcampbe2020 />,
  sshank2018: <Sshank2018 />,
  brudowitz2021: <Brudowitz2021 />,
};

export default function AboutId() {
  let params = useParams()!;
  const id = params.id!;
  const navigate = useNavigate();

  useEffect(() => {
    //if id is not valid, redirect user to about page
    if (!ids.includes(id)) navigate("/about");
  }, []);

  return components[id];
}
