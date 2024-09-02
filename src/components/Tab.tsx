/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const tabsStyles = css({
  fontSize: '0.875rem',
  marginTop: '1.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const tabListStyles = css({
  display: 'flex',
  gap: ' 0.8rem',
});

const tabStyles = css({
  padding: '0.5rem 0.7rem',
  border: 'none',
  borderRadius: '0.6rem',
  outline: 'none',
  backgroundColor: 'transparent',
  color: '#fef7ee',
  cursor: 'pointer',
});

const activeStyles = css({
  backgroundColor: '#6f757c',
});

interface TabProps {
  clickEventTab1: () => void;
  clickEventTab2: () => void;
  tabActive: string;
}

export const Tab = ({
  clickEventTab1,
  clickEventTab2,
  tabActive,
}: TabProps) => {
  return (
    <div css={tabsStyles}>
      <ul css={tabListStyles}>
        <li>
          <button
            onClick={clickEventTab1}
            css={[tabStyles, tabActive === 'all' && activeStyles]}
          >
            All Products
          </button>
        </li>
        <li>
          <button
            onClick={clickEventTab2}
            css={[tabStyles, tabActive === 'available' && activeStyles]}
          >
            Available Now
          </button>
        </li>
      </ul>
    </div>
  );
};
