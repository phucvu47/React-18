import React from 'react';
import sublinks from './data';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = React.useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const result = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (
      clientX < result.left - 1 ||
      clientX > result.right - 1 ||
      clientY > result.bottom - 1
    ) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;

          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
