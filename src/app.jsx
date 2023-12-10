//import count from ./signals/store

import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";

export function App() {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-3xl my-9 font-bold text-slate-800 dark:text-slate-200">
            User Form
          </h1>
          <UserForm />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl my-9 font-bold text-slate-800 dark:text-slate-200">
            User Table
          </h1>
          <UserTable />
        </div>
      </div>
    </>
  );
}
