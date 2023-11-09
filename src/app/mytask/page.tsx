import { getAllTodos, getToDo } from '@/components/api';
import MyTask from '@/components/MyTask';
import { ITask } from '@/types/tasks';

export default async function MmyTask({
  searchParams,
}: {
  searchParams: { [id: string]: string };
}) {
  const id: string = searchParams.id || '';
  const task: ITask = await getToDo(id).then((task: ITask) => {
    return task;
  });
  // console.log(task);
  // const data = task.then((task) => {task});
  return (
    <main className="max-w-4xl mx-auto mt-4 min-h-screen">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        {/* <AddTask /> */}
      </div>
      <MyTask task={task} />
    </main>
  );
}
