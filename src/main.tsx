import React from 'react'
import { createRoot, Root as RootNode } from 'react-dom/client';
import { unmountComponentAtNode as unmount } from 'react-dom';
import { StyleSheetManager } from 'styled-components';
import App from './application/App'

export type Root = RootNode;

type Params = (
  root: Root,
  shadowRoot: ShadowRoot,
  config: {
    [field: string]: any
  }
) => Root

const render: Params = (root, shadowRoot, config) => {
  root.render(
    <StyleSheetManager target={shadowRoot}>
      <App {...config} />
    </StyleSheetManager>,
  );
  return root;
};

export { unmount, render, createRoot };


