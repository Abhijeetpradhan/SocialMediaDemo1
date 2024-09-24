import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const RightSideBar = () => {
  return (
    <Box
      bgcolor="#efebe9"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"} width={300} >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup total={10} max={5}>
          <Avatar
            alt="Remy Sharp"
            src="https://wallpaperaccess.com/full/1471777.jpg"
            sx={{height:"50px",width:"50px"}}
          />
          <Avatar
            alt="Travis Howard"
            src="https://c4.wallpaperflare.com/wallpaper/158/122/422/anime-anime-boys-jujutsu-kaisen-yuji-itadori-sakuna-hd-wallpaper-preview.jpg"
            sx={{height:"50px",width:"50px"}}
          />
          <Avatar
            alt="Agnes Walker"
            src="https://c4.wallpaperflare.com/wallpaper/95/627/603/jujutsu-kaisen-fushiguro-toji-weapon-sword-muscles-hd-wallpaper-preview.jpg"
            sx={{height:"50px",width:"50px"}}
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://c4.wallpaperflare.com/wallpaper/622/941/214/jujutsu-kaisen-satoru-gojo-hd-wallpaper-preview.jpg"
            sx={{height:"50px",width:"50px"}}
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://wallpaperaccess.com/full/1471777.jpg"
            sx={{height:"50px",width:"50px"}}
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://wallpaperaccess.com/full/1471777.jpg"
            sx={{height:"50px",width:"50px"}}
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={1} mb={2}>
          Latest Photos
        </Typography>

        <ImageList sx={{ width: 420, height: 168}} cols={3} rowHeight={164}>
      
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/781/702/513/ryomen-sukuna-jujutsu-kaisen-hd-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/828/344/44/jujutsu-kaisen-yuji-itadori-anime-boys-anima-tactics-fighting-hd-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/332/915/762/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/428/1015/680/one-piece-portgas-d-ace-anime-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/1008/163/718/anime-one-piece-sanji-one-piece-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/198/309/80/anime-one-piece-nico-robin-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/373/676/41/kimetsu-no-yaiba-anime-anime-boys-tanjiro-kamado-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/379/589/222/one-piece-buggy-one-piece-shanks-one-piece-hd-wallpaper-preview.jpg"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/1000/426/537/one-piece-shanks-one-piece-hd-wallpaper-preview.jpg"
          />
        </ImageListItem>
  
    </ImageList>

    <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>


        <List sx={{ width: '450px', maxWidth: "450px", bgcolor: 'background.paper',maxHeight: 300, overflowY: 'auto' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://c4.wallpaperflare.com/wallpaper/95/627/603/jujutsu-kaisen-fushiguro-toji-weapon-sword-muscles-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://c4.wallpaperflare.com/wallpaper/158/122/422/anime-anime-boys-jujutsu-kaisen-yuji-itadori-sakuna-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://c4.wallpaperflare.com/wallpaper/912/632/988/jujutsu-kaisen-gojo-satoru-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://c4.wallpaperflare.com/wallpaper/912/632/988/jujutsu-kaisen-gojo-satoru-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://c4.wallpaperflare.com/wallpaper/912/632/988/jujutsu-kaisen-gojo-satoru-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://c4.wallpaperflare.com/wallpaper/912/632/988/jujutsu-kaisen-gojo-satoru-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://c4.wallpaperflare.com/wallpaper/912/632/988/jujutsu-kaisen-gojo-satoru-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://c4.wallpaperflare.com/wallpaper/912/632/988/jujutsu-kaisen-gojo-satoru-hd-wallpaper-preview.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  );
};

export default RightSideBar;
