import React, { useState } from 'react';
import CourseContent from './CourseContent';
import JoinClass from './join_class';
import InstanceProgress from './InstanceProgress'; // Import de l'interface InstanceProgress

const App = () => {
  const [interfaces, setInterfaces] = useState(['CourseContent']); // Tableau initial contenant l'interface CourseContent

  const toggleInterface = (interfaceName) => {
    if (interfaces.includes(interfaceName)) {
      setInterfaces(interfaces.filter((name) => name !== interfaceName));
    } else {
      setInterfaces([...interfaces, interfaceName]);
    }
  };

  return (
    <div>
      <button onClick={() => toggleInterface('CourseContent')}>Toggle Course Content</button>
      <button onClick={() => toggleInterface('JoinClass')}>Toggle Join Class</button>
      <button onClick={() => toggleInterface('InstanceProgress')}>Toggle Instance Progress</button>

      {interfaces.includes('CourseContent') && <CourseContent />} {/* Affiche CourseContent si présent dans le tableau interfaces */}
      {interfaces.includes('JoinClass') && <JoinClass />} {/* Affiche JoinClass si présent dans le tableau interfaces */}
      {interfaces.includes('InstanceProgress') && <InstanceProgress />} {/* Affiche InstanceProgress si présent dans le tableau interfaces */}
    </div>
  );
};

export default App;
