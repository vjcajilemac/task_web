import './TaskLayout.css'
import { Header, SideBar } from '../components';

const TaskLayout = ({children, title = ""}) => {
  return (
    <div className='layout'>
      <nav className='header_container'>
      <Header/>
      </nav>
      <div className='body_container'>
        <div className='sidebar_container'>
          <SideBar/>
        </div>
        <div className='content_container'>
        {children}
        </div>
      
      </div>


    
    </div>
    

  )
}

export default TaskLayout;