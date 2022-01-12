import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <header className="bg-slate-500 p-5 text-white">asasdasddasd</header>
      <BrowserRouter>
        <Routes>
          <Route index element={<p>asd</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
