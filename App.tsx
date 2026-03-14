import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import { MoodboardProvider } from './context/MoodboardContext';
import { TestimonialProvider } from './context/TestimonialContext';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <ProjectProvider>
      <TestimonialProvider>
        <MoodboardProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </MoodboardProvider>
      </TestimonialProvider>
    </ProjectProvider>
  );
}

export default App;