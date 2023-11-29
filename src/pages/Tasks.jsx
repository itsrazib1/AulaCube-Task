
import TaskCard from '../components/tasks/TaskCard';
import AddTaskModal from '../components/tasks/AddTaskModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import MenuDropdown from '../components/ui/MenuDropdown';

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((state) => state.tasksSlice);

  const pendingTasks = tasks?.filter((item) => item.status == 'pending');
  const runningTasks = tasks?.filter((item) => item.status == 'running');
  const doneTasks = tasks?.filter((item) => item.status == 'done');

  return (
    <>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="h-screen grid grid-cols-12">
        <div className="col-span-12 px-10 pt-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-3xl">Tasks</h1>
            </div>
            <div className="flex gap-5">
              
             
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-primary"
              >
                Add Task
              </button>
              <MenuDropdown>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/311312332_1582049148897752_7564633615246784129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGs6rPnPP90V4nj_mp6laTm6A2BftOGOhvoDYF-04Y6GyGdgaZdD6abIIt-6bz5HftLa1_TN4gpcAzB9C3vO-1p&_nc_ohc=Ujo93eFP6bYAX9bKMp5&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAjznRemsN3skseqqR4VPszkWeFmtMAVr7_f0_1_iu29g&oe=6569FECF"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
              </MenuDropdown>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10">
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0  justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Up Next</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {pendingTasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {pendingTasks.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>In Progress</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {runningTasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {runningTasks.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Up Next</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {doneTasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {doneTasks.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Tasks;
