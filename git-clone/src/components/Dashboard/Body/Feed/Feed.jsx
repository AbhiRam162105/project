import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./Feed.css";
import { MarkGithubIcon, StarFillIcon } from "@primer/octicons-react";

// Placeholder URL for the background image
const backgroundImageUrl =
  "https://github.githubassets.com/assets/bg-16e73268b1b3.jpg";

const repositories = [
  {
    title: "React",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    stars: 150000,
    technology: "JavaScript",
    url: "https://github.com/facebook/react",
  },
  {
    title: "Vue.js",
    description: "The Progressive JavaScript Framework.",
    stars: 180000,
    technology: "JavaScript",
    url: "https://github.com/vuejs/vue",
  },
  {
    title: "Angular",
    description: "One framework. Mobile & desktop.",
    stars: 60000,
    technology: "TypeScript",
    url: "https://github.com/angular/angular",
  },
  {
    title: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    stars: 50000,
    technology: "JavaScript",
    url: "https://github.com/expressjs/express",
  },
  {
    title: "Django",
    description: "The web framework for perfectionists with deadlines.",
    stars: 120000,
    technology: "Python",
    url: "https://github.com/django/django",
  },
];

export default function Feed() {
  const [visibleRepos, setVisibleRepos] = React.useState(4);

  const handleViewMore = () => {
    setVisibleRepos(repositories.length);
  };

  return (
    <>
      <div className="cards">
        <Box
          sx={{
            display: "flex",
            height: "95vh",
            overflowY: "auto",
            color: "white",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              margin: "2vw",
              height: "100%",
            }}
          >
            <h1 className="HomeText">Home</h1>
            {repositories.slice(0, visibleRepos).map((repo, index) => (
              <Box key={index} sx={{ width: 750 }}>
                <Card
                  variant="outlined"
                  sx={{
                    marginBottom:
                      index === repositories.length - 1 ? "20px" : "0",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {repo.title}
                    </Typography>
                    <Typography variant="body2" color="whitesmoke">
                      {repo.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
            {visibleRepos < repositories.length && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleViewMore}
                sx={{ marginTop: 2 }}
              >
                View More
              </Button>
            )}
          </Box>

          <Box
            sx={{
              flex: 1,
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              overflowY: "auto",
              marginTop: "4vw",
            }}
          >
            {/* GitHub-style side card with background image */}
            <Card
              sx={{
                width: 300,
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  GitHub Trending
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check out the most popular repositories on GitHub.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Trending</Button>
              </CardActions>
            </Card>
            {/* Another GitHub-style side card with repository details */}
            <Card
              sx={{
                width: 300,
                height: 500,
              }}
            >
              <CardContent>
                <Typography variant="h7" component="div">
                  Explore Repositories
                </Typography>
                {repositories.slice(0, 3).map((repo, index) => (
                  <Box key={index} sx={{ marginTop: 2 }}>
                    <Typography variant="h6" component="div">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.title}
                      </a>
                    </Typography>
                    <Typography variant="body2" color="text">
                      {repo.description}
                    </Typography>
                    <Typography variant="body2" color="text">
                      <StarFillIcon /> {repo.stars}
                    </Typography>
                    <Typography variant="body2" color="text">
                      Technology: {repo.technology}
                    </Typography>
                    {index < repositories.slice(0, 3).length - 1 && <hr />}
                  </Box>
                ))}
              </CardContent>

              <CardActions>
                <Button size="small">View More</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </div>
    </>
  );
}
