import React, {FC} from 'react';
import {proxy} from 'valtio';
import useProxy from 'valtio/macro';

type Props = {};

class Store {
  user: string = '---';
  updateUser1 = () => {
    this.user += 'user1'
  }

  updateUser2() {
    this.user += 'user2'
  }

  get updateUser3() {
    return () => {
      this.user += 'user3'
    }
  }

  something = 'sdf';

  updateSomethingElse() {
    this.something += '!'
  }

}

const store = proxy(new Store());

export const Hello: FC<Props> = ({}) => {
  console.log("### > Hello")
  useProxy()(store);

  return <div>
    <h1>Hello {store.user}</h1>
    <div>
      <button onClick={() => store.updateUser1()}>User1</button>
      <button onClick={() => store.updateUser2()}>User2</button>
      <button onClick={() => store.updateUser3()}>User3</button>
      <button onClick={() => store.updateSomethingElse()}>updateSomethingElse</button>
    </div>
  </div>;
}
