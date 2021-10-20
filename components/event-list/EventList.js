import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import eventsData from "../data/events-data";
import Event from "./Event";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const { data } = eventsData;
    setEvents(data);
  }, []);
  return (
    <Box>
      {/* Title */}
      <Typography variant="h5" marginBottom={1}>
        🎉 Events
      </Typography>

      {/* Events */}
      <Stack spacing={1.5}>
        {events.map((event) => (
          <Event key={event.id} data={event} />
        ))}
      </Stack>
    </Box>
  );
};

export default EventList;
