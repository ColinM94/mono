import { signOut } from '@mono/firebase/auth.ts';
import { Button } from '@mono/ui/components.ts';

export const TasksPage = () => {
  return (
    <>
      Tasks
      <Button label="Sign Out" onClick={signOut} />
    </>
  );
};
