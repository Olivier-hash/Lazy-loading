import React, { Suspense, lazy } from "react"

const LazyComponent = lazy(() => Wait(1000).then(() => import("./LazyComponent")));

function Wait(time){
  return new Promise((resolve) => {
    setTimeout (resolve, time)
  })
}

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
