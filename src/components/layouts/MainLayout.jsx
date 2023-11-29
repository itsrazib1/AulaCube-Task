import { Outlet } from 'react-router-dom'; 

const MainLayout = () => {
  return (
    
      <div className="w-full bg-emerald-50">
        <Outlet />
      </div>
   
  );
};

export default MainLayout;
