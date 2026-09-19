import { WindowControls } from '#components'
import { blogPosts } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import {
  ChevronLeft,
  ChevronRight,
  ShieldHalf,
  Search,
  Share,
  Copy,
  PanelLeft,
  Plus,
  MoveRight
} from 'lucide-react'
import React from 'react'

const Safari = () => {
  return (
    <div className="h-full flex flex-col">

      {/* HEADER */}
      <div id='window-header' className="flex items-center px-4 py-2 shrink-0">
        <WindowControls target="safari" />

        <PanelLeft className='ml-10 icon' />

        <div className='flex items-center gap-1 ml-5'>
          <ChevronLeft className='icon'/>
          <ChevronRight className='icon'/>
        </div>

        <div className='flex-1 flex items-center justify-center gap-3'>
          <ShieldHalf className="icon" />
          
          <div className='search flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 w-[400px]'>
            <Search className='icon' />
            <input 
              type='text'
              placeholder='Search or enter website name'
              className='flex-1 bg-transparent outline-none text-sm'
            />
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <Share className='icon' />
          <Plus className='icon' />
          <Copy className='icon' />
        </div>
      </div>

      {/* SCROLLABLE BODY */}
      <div className="flex-1 overflow-y-auto blog-scroll max-h-[500px]">

        <div className='blog px-8 py-6'>
          <h2 className="text-2xl font-semibold text-pink-600 mb-8">
            My Live Projects
          </h2>

          <div className='space-y-8'>
            {blogPosts.map(({ id, image, title, date, link}) => (
              <div key={id} className='blog-post flex gap-6 items-start'>

                <div className='w-20 h-20'>
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className='content'>
                  <p className="text-sm text-gray-500">{date}</p>

                  <h3 className="text-lg font-medium text-gray-800">
                    {title}
                  </h3>

                  <a 
                    href={link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className="flex items-center gap-2 text-blue-600 mt-2 hover:underline"
                  >
                    Check out the project 
                    <MoveRight className='w-4 h-4'/>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, "safari")
export default SafariWindow