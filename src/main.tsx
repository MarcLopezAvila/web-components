import React from 'react'
import { createRoot, Root as RootNode } from 'react-dom/client';
import { unmountComponentAtNode as unmount } from 'react-dom';
import App from './application/App'

export type Root = RootNode;

type Params = (
  root: Root,
  config: {
    [field: string]: any
  }
) => Root

const render: Params = (root, config) => {
  root.render(
    <App {...config} />
  );
  return root;
};

export { unmount, render, createRoot };


