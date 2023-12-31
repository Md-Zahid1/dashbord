import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups/src'
import { FiSettings } from 'react-icons/fi'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Order';
import Calender from './pages/Calender';
import Employees from './pages/Employees';
import Stacked from './pages/Charts/Stacked';
import Pyramid from './pages/Charts/Pyramid';
import Customer from './pages/Customer';
import Kanban from './pages/Kanban';
import Area from './pages/Charts/Area';
import Bar from './pages/Charts/Bar';
import Pie from './pages/Charts/Pie';
import Financial from './pages/Charts/Financiale';
import ColorPicker from './pages/ColorPicker';
import ColorMapping from './pages/Charts/ColorMapping';
import Editor from './pages/Editor';
import Line from './pages/Charts/Line'

import { useStateContext } from './contexts/ContextProvider'

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Setting' position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: currentColor, borderRadius: '50%' }} onClick={() => setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondery-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondery-dark-bg'>
              <Sidebar />
            </div>
          )
          }
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
            <div>

              {themeSettings && <ThemeSettings />}

              <Routes>
                {/*Dashbord*/}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                {/*pages*/}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customer />} />
                {/*Apps*/}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calender />} />
                <Route path='/color-picker' element={<ColorPicker />} />
                {/*charts*/}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pai' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App