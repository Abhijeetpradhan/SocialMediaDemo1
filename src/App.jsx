import {Box, Stack } from "@mui/material"
import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar"
import Feed from "./Components/Feed"
import RightSideBar from "./Components/RightSideBar"
function App() {

  return (
    <Box>
      <Navbar/>
      <Stack direction="row" justifyContent="space-between"> 
        <SideBar />
        <Feed/>
        <RightSideBar/>
      </Stack>
    </Box>
  )
}

export default App
