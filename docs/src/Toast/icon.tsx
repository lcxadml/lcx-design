import { Button, Toast } from 'lcx-design';
import { Add } from 'lcx-design-icon';
import React from 'react';

export default function IconToast() {
  return (
    <Button
      onClick={() => {
        Toast.show({ content: 'Hello Toast', icon: <Add /> });
      }}
    >
      弹出Icon Toast
    </Button>
  );
}
