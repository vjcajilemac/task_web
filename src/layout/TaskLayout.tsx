import './TaskLayout.css'
import { Header, SideBar } from '../components';

const TaskLayout = ({children}:any) => {

  return (
    <div className='layout'>
      <nav className='header_container'>
      <Header/>
      </nav>
      <div className='body_container  col-12'>
        <div className='sidebar_container container-fluid col-0 col-sm-3 col-md-4'>
          <SideBar/>
        </div>
        <div className='content_container col-12 col-sm-9 col-md-8'>
        {children}
        </div>
      
      </div>


    
    </div>
    

  )
}

export default TaskLayout;