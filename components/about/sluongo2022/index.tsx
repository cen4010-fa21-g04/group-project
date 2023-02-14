import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
export default function AboutSluongo2022() {
  return (
    <div className="sluongo2022">
      <img src="https://media.licdn.com/dms/image/D4E03AQEF_Yyc76WhxQ/profile-displayphoto-shrink_800_800/0/1673704399526?e=1681948800&v=beta&t=QkaIXQUXbz1v0Jr1BhXUCh06Em_2wGG1o7vXtZItugE" />
      <span className="sluongo2022-content">
        <h1>Hello, I'm Steven Luongo</h1>
        <p>
          I've been working as a professional developer for around 2 years now.
          I enjoy building web apps and making peoples lives easier. Born and
          raised in South Florida and currently attend FAU as a senior.
        </p>
        <span className="sluongo2022-links">
          <IconButton
            aria-label="delete"
            size="large"
            href="https://www.linkedin.com/in/steven-luongo/"
            target="_blank"
          >
            <LinkedInIcon sx={{ color: '#121212', fontSize: '2rem' }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            href="https://github.com/stevenluongo"
            target="_blank"
          >
            <GitHubIcon sx={{ color: '#121212', fontSize: '2rem' }} />
          </IconButton>
        </span>
      </span>
    </div>
  );
}
