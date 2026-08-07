import { addDocument } from '@mono/firebase/firestore';

import { Button } from 'components/button/button';
import type { Task } from 'types/task';

export const TasksPage = () => {
  // const [show, setShow] = React.useState(false);

  return (
    <>
      <Button
        type="primary"
        label="Test"
        onClick={async () => {
          const response = await addDocument<Task>({
            collection: 'tasks',
            data: {
              dueDate: 0,
              name: 'Helllooo Collliinnn',
              checked: false,
            },
          });

          if (response.success) {
            console.log('success');
          } else console.log('failed');
        }}
      />

      {/* <ProgressBar progress={tasks.filter((task) => task.done).length} maxProgress={tasks.length} /> */}
      {/* <Button label="Click" onClick={() => setShow(true)} type="secondary" /> */}
      {/* <Modal show={show} setShow={setShow}>
        {show}
      </Modal>

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
      /> */}
    </>
  );
};
