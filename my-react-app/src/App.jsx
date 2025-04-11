import React, { Suspense, lazy } from "react"


function Wait(time){
  return new Promise((resolve) => {
    setTimeout (resolve, time)
  })
}

const LazyComponent = lazy(() => Wait(1000).then(() => import("./LazyComponent")));


function App() {

  return (
    <div>
      <h1>Main App</h1>

      <Suspense fallback={<p>Loading the component...⏳ </p>}>
        <LazyComponent/>
      </Suspense>
    </div>
  );
}

export default App
