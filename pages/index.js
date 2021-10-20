import { Grid } from "@mui/material";
import * as React from "react";
import About from "../components/about/About";
import EventList from "../components/event-list/EventList";
import Layout from "../components/layout/Layout";
import MemberList from "../components/member-list/MemberList";
import ProjectList from "../components/project-list/ProjectList";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <About />
        </Grid>
        <Grid item md={4}>
          <EventList />
        </Grid>
        <Grid item xs={12}>
          <ProjectList />
        </Grid>
        <Grid item xs={12}>
          <MemberList />
        </Grid>
      </Grid>
    </Layout>
  );
}
