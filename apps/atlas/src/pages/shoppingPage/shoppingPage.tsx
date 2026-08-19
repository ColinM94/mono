import { List } from 'components/list/list.tsx';
import { defaultShoppingItem } from 'constants/defaults.ts';

export const ShoppingPage = () => {
  return (
    <List
      collection="shopping"
      defaultData={defaultShoppingItem}
      inputs={[
        {
          inputType: 'text',
          propertyKey: 'name',
        },
      ]}
      items={(dataItem) => ({
        id: dataItem.id,
        data: dataItem,
        name: dataItem.name,
        checked: dataItem.checked,
      })}
      mainPropertyKey="name"
    />
  );
};
