import { Button, Toast } from 'lcx-design';
import React from 'react';

export default function index() {
  return (
    <Button
      onClick={() => {
        Toast.show('Hello Toast');
      }}
    >
      弹出Toast
    </Button>
  );
}
