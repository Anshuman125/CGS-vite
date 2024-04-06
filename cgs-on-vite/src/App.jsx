import React from 'react'
import Nav from './components/Nav'
import {FoldersAbout, FoldersGame, FoldersWhat, FoldersGraphics, FoldersBlogs} from './components/Folders'
import './App.css'

function App() {
  return (
    <>
      <div className='w-full h-screen bg-zinc-800'>
        <div>
          <Nav/>
        </div>
        <div className='folder-container'>
          <div className='folder-items'>
            <a href='#'><FoldersAbout text={"About us"} title={"title1"} content={"loremIpsum123"}/></a>
            <a href='#'><FoldersWhat text={"What we do"} title={"title2"} content={"loremIpsum321"}/></a>
          </div>
          <div className='folder-items'>
            <a href='#'><FoldersGame text={"Our Games"}/></a>
            <a href='#'><FoldersGraphics text={"Our Graphics"}/></a>
            {/*<a href='#'><Folders text={"Our Graphic"}/></a> */}
          </div>
          <div className='folder-items'>
          <a href='#'><FoldersBlogs text={"Blogs"} title={"tit"} content={"Coming Soon!!"}/></a>
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default App
