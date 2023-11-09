'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className="max-w-4xl mx-auto mt-4 min-h-screen justify-between p-24">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
      </div>
      <div className="items-center p-10">
        <button
          className="btn btn-primary w-full items-center"
          onClick={() => {
            router.push('/mytasks');
          }}
        >
          Enter
        </button>
      </div>
    </main>
  );
}
