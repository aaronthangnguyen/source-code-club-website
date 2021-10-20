import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import projectsData from "../data/projects-data";
import Project from "./Project";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = projectsData;
    setProjects(data);
  }, []);
  return (
    <Box>
      <Typography variant="h5" marginBottom={1}>
        🚀 Projects
      </Typography>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={1}
        justifyContent="flex-start"
      >
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectList;
