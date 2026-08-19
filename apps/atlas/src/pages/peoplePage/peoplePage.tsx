import { useAppStoreSlice } from 'stores/useAppStore/useAppStore.tsx';
import { List } from 'components/list/list.tsx';
import { defaultPerson } from 'constants/defaults.ts';

export const PeoplePage = () => {
  const { peopleLayout } = useAppStoreSlice('peopleLayout');

  return (
    <List
      collection="people"
      layout={peopleLayout}
      defaultData={defaultPerson}
      inputs={[
        {
          inputType: 'text',
          propertyKey: 'name',
        },
      ]}
      items={(dataItem) => ({
        id: dataItem.id,
        name: dataItem.name,
        data: dataItem,
      })}
      mainPropertyKey="name"
    />
  );
};
