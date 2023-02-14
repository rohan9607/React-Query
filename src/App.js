import './App.css';
import Router from './Routes';
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router/>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
    </QueryClientProvider>
  );
}

export default App;
