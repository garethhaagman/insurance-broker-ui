import './App.css'
import CallUserForm from './components/CallUserForm'
import Header from './components/Header'
function App() {

  return (
    <>
    <Header />
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-x-hidden lg:pt-10 lg:pb-0 xl:pt-0 xl:pb-64">
  <div className="container flex flex-col items-center justify-between flex-grow max-w-6xl px-8 mx-auto lg:flex-row xl:px-0">
    <div className="flex flex-col items-center justify-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-0 xl:pt-0 lg:text-left">
      <h1 className="mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
        Talk to us about AI Insurance
      </h1>
      <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
        Is your organisation covered against the risks posed by Artificial Intelligence?
      </p>
    </div>
    <div className="relative flex items-center justify-center w-full max-w-4xl mt-20 mb-20 lg:w-1/2 lg:mt-24 xl:mt-40">
      <div className="w-full max-w-xs mx-auto">
        <CallUserForm />
      </div>
    </div>
  </div>
  <p className="text-center text-gray-500 text-xs">
    &copy;2024 Testudo Global
  </p>
</div>
    </>
  )
}

export default App
