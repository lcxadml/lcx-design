const defaultNamespace = "lcx";

const _bem = (
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${defaultNamespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }

  return cls;
};

const useNamespace = (block: string) => {
  const b = (blockSuffix = "") => {
    return _bem(block, blockSuffix, "", "");
  };
  const e = (element: string) => {
    return _bem(block, "", element, "");
  };
  const m = (modifier: string) => {
    return _bem(block, "", "", modifier);
  };
  const be = (blockSuffix: string, element: string) => {
    return _bem(block, blockSuffix, element, "");
  };
  const bm = (blockSuffix: string, modifier: string) => {
    return _bem(block, blockSuffix, "", modifier);
  };

  const em = (element: string, modifier: string) => {
    return _bem(block, "", element, modifier);
  };
  const bem = (blockSuffix: string, element: string, modifier: string) => {
    return _bem(block, blockSuffix, element, modifier);
  };

  return { b, e, m, be, bm, em, bem };
};

export default useNamespace;
