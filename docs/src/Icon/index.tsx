import * as AllIcons from 'lcx-design-icon';
import React, { useMemo } from 'react';

const allIcons: Record<string, any> = AllIcons;

export default function Icon() {
  const visibleIconList = useMemo(() => {
    return Object.keys(allIcons);
  }, []);

  return (
    <div>
      {visibleIconList.map((iconName: any) => {
        const Component = allIcons[iconName];
        return <Component style={{ fontSize: '20px' }} key={iconName} />;
      })}
    </div>
  );
}
