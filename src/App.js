import React, { createContext } from "react";
import ChildA from "./component/ChildA";
import Task from "./component/Task";
import Counter from "./component/Counter"
export const MyContext = createContext();

const App = () => {
  const contextValue = "hello context";

  return (
    <div>
      <MyContext.Provider value={contextValue}>
        <ChildA />
      </MyContext.Provider>

      <h1>Todo list</h1>
      <Task text="buy grocery" completed={true}/>
      <Task Text="bu" completed={false}/>
      <Task text="sag" completed={false}/>

        <Counter/>
    </div>
  );
};

export default App;
