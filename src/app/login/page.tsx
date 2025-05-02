export default function Login() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="grid gap-4">
          <h1>Log In</h1>
          <input type="text" name="username" id="username" data-form-type="username" placeholder="Username" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
          <input type="password" name="password" id="password" data-form-type="password,new" placeholder="Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
        </div>
      </main>
    </div>
  );
}
