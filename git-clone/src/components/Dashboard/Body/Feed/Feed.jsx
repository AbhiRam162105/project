import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./Feed.css";
import { MarkGithubIcon } from "@primer/octicons-react";

const repositories = [
  {
    title: "Mock Repository 1",
    description: "This is a mock repository for demonstration purposes.",
    url: "https://github.com/mockuser/mockrepo1",
  },
  {
    title: "Mock Repository 2",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 3",
    description: "Yet another mock repository for demonstration.",
    url: "https://github.com/mockuser/mockrepo3",
  },
  {
    title: "Mock Repository 4",
    description: "Mock repository number four.",
    url: "https://github.com/mockuser/mockrepo4",
  },
  {
    title: "Mock Repository 5",
    description: "Fifth mock repository for demonstration.",
    url: "https://github.com/mockuser/mockrepo5",
  },
  {
    title: "Mock Repository 5",
    description: "Fifth mock repository for demonstration.",
    url: "https://github.com/mockuser/mockrepo5",
  },
  {
    title: "Mock Repository 5",
    description: "Fifth mock repository for demonstration.",
    url: "https://github.com/mockuser/mockrepo5",
  },
  {
    title: "Mock Repository 5",
    description: "Fifth mock repository for demonstration.",
    url: "https://github.com/mockuser/mockrepo5",
  },
  {
    title: "Mock Repository 5",
    description: "Fifth mock repository for demonstration.",
    url: "https://github.com/mockuser/mockrepo5",
  },
  {
    title: "Mock Repository 5",
    description: "Fifth mock repository for demonstration.",
    url: "https://github.com/mockuser/mockrepo5",
  },
  // Add more mock repositories as needed
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
            {/* Filter Button */}
            {repositories.slice(0, visibleRepos).map((repo, index) => (
              <Box key={index} sx={{ width: 675 }}>
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
              marginLeft: "32px",
            }}
          >
            {/* Example GitHub-style side card */}
            <Card sx={{ width: 300 }}>
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
            <Card sx={{ width: 300 }}>
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
          </Box>
        </Box>
      </div>
    </>
  );
}
