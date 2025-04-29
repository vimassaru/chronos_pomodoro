import { createContext, useContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

type TaskContentProviderProps = {
  children: React.ReactNode;
};

export const TaskContext = createContext<TaskContextProps>({
  state: initialState,
  setState: () => {},
});

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContextProvider = ({ children }: TaskContentProviderProps) => {
  return (
    <TaskContext.Provider value={{ ...initialContextValue }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
