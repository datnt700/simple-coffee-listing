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

interface Tab {
  label: string;
  id: string;
  onClick: () => void;
}

interface TabProps {
  tabs: Tab[];
  activeTabId: string;
}

export const Tab = ({ tabs, activeTabId }: TabProps) => {
  return (
    <div css={tabsStyles}>
      <ul css={tabListStyles}>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={tab.onClick}
              css={[tabStyles, activeTabId === tab.id && activeStyles]}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
