function App() {
  return (
    <div className="App w-screen h-screen bg-slate-800 grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 p-5">
      <div className="rounded-3xl bg-gradient-to-r from-type-one-blue via-type-one-puple to-type-one-yellow"></div>
      <div className="rounded-3xl bg-gradient-to-r from-type-three-pink via-type-three-blue to-type-three-green"></div>
      <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="rounded-3xl bg-gradient-to-r from-pastel-purple to-pastel-blue"></div>
      <div className="rounded-3xl bg-gradient-to-r from-type-lime-normal to-type-lime-light"></div>
    </div>
  );
}

export default App;
