import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./Feed.css";

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
    title: "Mock Repository 2",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 2",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 2",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 2",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 2",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  // Add more mock repositories as needed
];

export default function Feed() {
  return (
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
          gap: 2,
          margin: "1vw 3vw",
        }}
      >
        {repositories.map((repo, index) => (
          <Box key={index} sx={{ width: 675 }}>
            <Card variant="outlined">
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
        {/* Add more GitHub-style side cards as needed */}
      </Box>
    </Box>
  );
}
