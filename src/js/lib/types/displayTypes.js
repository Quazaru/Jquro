const displayTypes = [
  /* <display-outside> values */
  'block',
  'inline',
  'run-in',

  /* <display-inside> values */
  'flow',
  'flow-root',
  'table',
  'flex',
  'grid',
  'ruby',

  /* <display-outside> plus <display-inside> values */
  'block flow',
  'inline table',
  'flex run-in',

  /* <display-listitem> values */
  'list-item',
  'list-item block',
  'list-item inline',
  'list-item flow',
  'list-item flow-root',
  'list-item block flow',
  'list-item block flow-root',
  'flow list-item block',

  /* <display-internal> values */
  'table-row-group',
  'table-header-group',
  'table-footer-group',
  'table-row',
  'table-cell',
  'table-column-group',
  'table-column',
  'table-caption',
  'ruby-base',
  'ruby-text',
  'ruby-base-container',
  'ruby-text-container',

  /* <display-box> values */
  'contents',
  'none',

  /* <display-legacy> values */
  'inline-block',
  'inline-table',
  'inline-flex',
  'inline-grid',

  /* Global values */
  'inherit',
  'initial',
  'unset',
];

export default displayTypes;
