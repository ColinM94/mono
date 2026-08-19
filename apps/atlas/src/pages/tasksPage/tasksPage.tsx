import { List } from 'components/list/list.tsx';
import { defaultTask } from 'constants/defaults.ts';

export const TasksPage = () => {
  return (
    <>
      {/* <Modal show={show} setShow={setShow}>
        {show}
      </Modal> */}

      <List
        items={(item) => ({
          id: item.id,
          name: item.name,
          date: item.dueDate,
          checked: item.checked,
          data: item,
        })}
        defaultData={defaultTask}
        collection="tasks"
        mainPropertyKey="name"
        inputs={[
          {
            inputType: 'text',
            propertyKey: 'name',
          },
          {
            inputType: 'date',
            propertyKey: 'dueDate',
          },
        ]}
      />
    </>
  );
};
