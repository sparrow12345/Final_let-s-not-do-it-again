'use client';
import { useRouter } from 'next/navigation';
import { ITask } from '@/types/tasks';
import { FormEventHandler, useState } from 'react';
import { deleteTodo, editTodo } from '@/components/api';

interface TaskProps {
  task: ITask;
}

const MyTask: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const { id, text, details } = task;
  const [taskToEdit, setTaskToEdit] = useState<string>(text);
  const [taskDetailsToEdit, setTaskDetailsToEdit] = useState<string>(details);
  const [error, setError] = useState<string>('');

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (taskToEdit.trim() === '') {
      setError('No Values?!');
    } else if (taskDetailsToEdit.trim() === '') {
      setError('No Details?!');
    } else {
      const res = await editTodo({
        id: id,
        text: taskToEdit,
        details: taskDetailsToEdit,
      });
      router.push('/mytasks');
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <form id="1" className="space-y-2" onSubmit={handleSubmitEditTodo}>
        <h3 className="font-bold text-lg">Edit task</h3>
        <input
          value={taskToEdit}
          onChange={(e) => setTaskToEdit(e.target.value)}
          type="text"
          placeholder={taskToEdit}
          className="input input-bordered w-full h-30"
        />
        <h4>Details:</h4>
        <textarea
          value={taskDetailsToEdit}
          onChange={(e) => setTaskDetailsToEdit(e.target.value)}
          placeholder={taskDetailsToEdit}
          className="input input-bordered w-full h-40" // p-2.5
        />
        <button type="submit" className="btn">
          Submit
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </main>
  );
};

export default MyTask;
