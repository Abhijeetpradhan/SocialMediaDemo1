import { MoreVert ,Favorite,Share, FavoriteBorder} from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Divider, Checkbox } from "@mui/material";

import React from "react";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box flex={4} padding={2}>

    <Posts avatarLogo="A" title="Future King of The Pirates - Monkey D. Luffy" date="September 24 2024" imgPost="https://wallpaperaccess.com/full/1471777.jpg" description={`Monkey D. Luffy, also known as "Straw Hat" Luffy, is a fictional character and the protagonist in the Japanese manga series One Piece created by Eiichiro Oda.Luffy made his debut as a young boy who acquires the properties of rubber after accidentally eating one of the Devil Fruits that belonged to "Red Hair" Shanks.`}  />
    <Posts avatarLogo="B" title="Potogas D.Ace" date="September 24 2024" imgPost="https://wallpaperaccess.com/full/103899.jpg" description={`"Portgas D. Ace,[11] born as Gol D. Ace[6] and nicknamed "Fire Fist" Ace,[5] was the biological son of the late Pirate King, Gol D. Roger, and Portgas D. Rouge,[12] as well as the sworn older brother of Monkey D. Luffy[7] and Sabo."`} />
    <Posts avatarLogo="C" title="Akagami No Shanks" date="September 24 2024" imgPost="https://wallpaperaccess.com/full/268199.png" description={`Shanks Red-Haired Shanks is a legendary and powerful pirate in the Grand Line, being the captain of the Red Haired Pirate Crew and one of the Four Emperors in the second half of the grand line.`} />
    

    </Box>
  );
};

export default Feed;
