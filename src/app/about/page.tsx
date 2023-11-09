export default async function about() {
  return (
    <main className="max-w-4xl mx-auto mt-4 min-h-screen justify-between p-24">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
      </div>
      <div className="text-center my-5 flex flex-col gap-4 py-10">
        <p>
          This app was developed by Majed Naser as an assignment for FWD Course,
          Innopolis University
        </p>
      </div>
    </main>
  );
}
