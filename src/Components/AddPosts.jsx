import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add,
  DateRange,
  EmojiEmotions,
  InsertPhoto,
  PersonAddAlt,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";

const AddPosts = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>{
    setOpen(true);
  }
  const handleClose = ()=>{
    setOpen(false);
  }

  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });


  return (
    <>
      <Tooltip title="Add Posts">
        <Fab
          onClick={handleOpen}
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 30,
            left: { xs: "calc(50% - 25px )", sm: 30 },
          }}
        >
          <Add />
        </Fab>

        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box width={400} height={280} borderRadius={1} p={3} bgcolor={"background.default"} color={"text.primary"}>
            <Typography variant="h6" fontWeight={400} textAlign="center">
              Create Post
            </Typography>
            <TextField
              sx={{
                marginTop: 2,
                marginBottom: 1,
              }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind ??"
              variant="standard"
              fullWidth
            />

            <Stack sx={{ flexDirection: "row", gap: 2, mt:1,mb:4}}>
              <EmojiEmotions color="primary" />
              <InsertPhoto color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAddAlt color="error" />
            </Stack>

            <ButtonGroup variant="contained" aria-label="Basic button group" >
              <Button>Post</Button>
              <Button>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
      </Tooltip>
    </>
  );
};

export default AddPosts;
