import { PageTree } from '@rocket/engine';
import { rocketComponents } from '@rocket/components/components.js';
import { LayoutHome } from '@rocket/spark';
import { sparkComponents } from '@rocket/spark/components.js';

export const pageTree = new PageTree();
await pageTree.restore(new URL('./pageTreeData.rocketGenerated.json', import.meta.url));

export const layout = new LayoutHome({
  pageTree,
  titleWrapperFn: title => title,
  description: 'Aurajoki Overflow',
  siteName: 'Aurajoki Overflow',
});

export const components = {
  ...rocketComponents,
  ...sparkComponents,
  'block-columns-gray': '#components/BlockColumnsGray.js::BlockColumnsGray',
};
