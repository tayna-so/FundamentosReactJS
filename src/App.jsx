import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
  
      <div className={styles.wrapper}>
         <Sidebar />
         <main>
          <Post
            author="Tayná Sousa"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error alias fugit hic voluptas odit voluptate numquam culpa ipsum iusto cum labore quos a nesciunt reiciendis aperiam unde tempora sapiente?"
          />
          <Post
            author="Tayná Sousa"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error alias fugit hic voluptas odit voluptate numquam culpa ipsum iusto cum labore quos a nesciunt reiciendis aperiam unde tempora sapiente?"
          />
        </main>
      </div>
    </div>
  )
}