'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '@/components/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');
  const [newTaskDetails, setNewTaskDetails] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (newTaskValue.trim() === '') {
      setError('No Values?!');
    } else if (newTaskDetails.trim() === '') {
      setError('No Details?!');
    } else {
      await addTodo({
        id: uuidv4(),
        text: newTaskValue,
        details: newTaskDetails,
      });
      setError('');
      setModalOpen(false);
      router.refresh();
    }
    setNewTaskValue('');
    setNewTaskDetails('');
  };

  return (
    <div>
      <button
        onClick={() => {
          setModalOpen(true);
          setError('');
        }}
        className="btn btn-primary w-full"
      >
        Add new task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form id="2" onSubmit={handleSubmitNewTodo} className="space-y-2">
          <h3 className="font-bold text-lg">Add new task</h3>
          <input
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            type="text"
            placeholder="Task"
            className="input input-bordered w-full"
          />
          <textarea
            value={newTaskDetails}
            onChange={(e) => setNewTaskDetails(e.target.value)}
            placeholder="Details (if any)"
            className="input input-bordered w-full h-28"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
