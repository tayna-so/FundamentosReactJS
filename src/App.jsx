import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Tayna Sousa"
        content="abc"
      />
      <Post
        author="Tayna Araujo"
        content="defgh"
      />
    </div>
  )
}