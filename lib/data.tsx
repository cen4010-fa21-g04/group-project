import AboutBrudowitz2021 from '@/components/about/brudowitz2021';
import AboutIcosta2021 from '@/components/about/icosta2021';
import AboutJbadalcampbe2020 from '@/components/about/jbadalcampbe2020';
import AboutSluongo2022 from '@/components/about/sluongo2022';
import AboutSshank2018 from '@/components/about/sshank2018';

export const memberIds: Array<string> = [
  'sluongo2022',
  'icosta2021',
  'jbadalcampbe2020',
  'sshank2018',
  'brudowitz2021',
];

export const memberComponents: { [key: string]: React.ReactElement } = {
  sluongo2022: <AboutSluongo2022 />,
  icosta2021: <AboutIcosta2021 />,
  jbadalcampbe2020: <AboutJbadalcampbe2020 />,
  sshank2018: <AboutSshank2018 />,
  brudowitz2021: <AboutBrudowitz2021 />,
};
