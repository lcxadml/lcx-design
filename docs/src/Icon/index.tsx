import copy from 'copy-to-clipboard';
import * as AllIcons from 'lcx-design-icon';
import React, { useMemo } from 'react';
import './index.less';

const allIcons: Record<string, any> = AllIcons;
const classPrefix = 'lcx-icon-doc';

export default function Icon() {
  const visibleIconList = useMemo(() => {
    return Object.keys(allIcons);
  }, []);

  const handleClick = (name: string) => {
    copy(`<${name} />`);
  };

  return (
    <div className={classPrefix}>
      {visibleIconList.map((iconName: any) => {
        const Component = allIcons[iconName];
        return (
          <div
            key={iconName}
            className={`${classPrefix}-item`}
            onClick={() => {
              handleClick(iconName);
            }}
          >
            <Component style={{ fontSize: '30px' }} />
            <div>{iconName}</div>
          </div>
        );
      })}
    </div>
  );
}
