import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Card users = "Al Zabir"  img = "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"></Card>

      <Card users = "Huda Man" age = {22} img = "https://plus.unsplash.com/premium_photo-1669703777432-ebd35ffb0633?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"></Card>

      <Card users = "New Man" img = "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"/>
    </div>
  );
};

export default App;