import copy from 'copy-to-clipboard';
import { Toast } from 'lcx-design';
import * as AllIcons from 'lcx-design-icon';
import React, { ReactNode, useMemo } from 'react';
import './index.less';

const allIcons: Record<string, any> = AllIcons;
const classPrefix = 'lcx-icon-doc';

export default function Icon() {
  const visibleIconList = useMemo(() => {
    return Object.keys(allIcons);
  }, []);

  const handleClick = (name: string, icon: ReactNode) => {
    const result = copy(`<${name} />`);
    if (result) {
      Toast.show({
        content: '复制成功',
        icon,
      });
    }
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
              handleClick(
                iconName,
                <Component style={{ fontSize: '40px', color: '#fff' }} />,
              );
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
