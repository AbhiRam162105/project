import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

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
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 4",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 5",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  {
    title: "Mock Repository 6",
    description: "Another mock repository to showcase the sidebar component.",
    url: "https://github.com/mockuser/mockrepo2",
  },
  // Add more mock repositories as needed
];

export default function Feed() {
  return (
    <>
      <div className="home">
        <div className="homeText">
          <h2>Home</h2>
        </div>
        <div className="filter">
          <div className="feedback"></div>
          <div className="filtering"></div>
        </div>
      </div>
      <Box sx={{ height: "95vh", overflowY: "auto" }}>
        {" "}
        {/* Outer Box for scrolling */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            margin: "3vw 3vw",
          }}
        >
          {repositories.map((repo, index) => (
            <Box key={index} sx={{ minWidth: "50vw", width: "100%" }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {repo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
      </Box>
    </>
  );
}
