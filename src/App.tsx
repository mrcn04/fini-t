import Sidebar from './components/Sidebar';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import { EventSourcesPage } from './pages/EventSourcesPage';
import { ChurnPathsPage } from './pages/ChurnPathsPage';
import { CohortsPage } from './pages/CohortsPage';
import { ActionsPage } from './pages/ActionsPage';
import { AppContext } from './contexts/appContext';
import { useReducer } from 'react';
import { reducer, initialState } from './contexts/appReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = { state, dispatch };

  return (
    <div className="flex h-full overflow-hidden">
      <AppContext.Provider value={providerState}>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/event-sources" />} />
            <Route path="/event-sources" element={<EventSourcesPage />} />
            <Route path="/churn-paths" element={<ChurnPathsPage />} />
            <Route path="/cohorts" element={<CohortsPage />} />
            <Route path="/actions" element={<ActionsPage />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
