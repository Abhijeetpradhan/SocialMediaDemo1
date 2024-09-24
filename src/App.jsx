import {Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar"
import Feed from "./Components/Feed"
import RightSideBar from "./Components/RightSideBar"
import AddPosts from "./Components/AddPosts"
import { useEffect, useState } from "react"
function App() {

  const currentTheme = localStorage.getItem("currentTheme")
  const [mode,setMode] = useState(currentTheme ? currentTheme : "light")

  useEffect(()=>{
    localStorage.setItem("currentTheme",mode) 
  },[mode])

  const DarkTheme  = createTheme({
    palette:{
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={DarkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" justifyContent="space-between"> 
        <SideBar mode={mode} setMode={setMode} />
        <Feed/>
        <RightSideBar/>
      </Stack>
      <AddPosts/>
    </Box>
    </ThemeProvider>
  )
}

export default App
