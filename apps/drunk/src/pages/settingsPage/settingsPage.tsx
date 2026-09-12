import * as React from 'react';
import { Button, Card, InputNumber, InputText, Row } from '@mono/ui/components';

import styles from './styles.module.css';

export const SettingsPage = () => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState<number | undefined>();

  return (
    <>
      <Card contentClassName={styles.header}>
        <div className={styles.appName}>App Name</div>
        <Button icon="GearSixIcon" variant="secondary" className={styles.settingsButton} />
        <Button icon="UserCircleIcon" variant="secondary" className={styles.profileButton} />
      </Card>

      <div className={styles.container}>
        <Card
          header={{
            heading: 'Heading',
            buttons: [
              {
                label: 'Click Me',
                variant: 'secondary',
              },
              {
                icon: 'PencilIcon',
                variant: 'secondary',
              },
            ],
          }}
        >
          <InputText label="Name" value={name} setValue={setName} />
          <InputText label="Potato" value={name} setValue={setName} />
          <InputText label="Enter a name" value={name} setValue={setName} />
          <InputNumber label="Age" value={number} setValue={setNumber} />

          <Row>
            <Button label="Small" size="small" variant="secondary" surface={2} />

            <Button label="Medium" size="medium" variant="secondary" surface={2} />
            <Button label="Large" size="large" variant="secondary" surface={2} />
          </Row>

          <Card surface={2}>Nested Card</Card>
          <Card header={{ heading: 'Nested Card' }} surface={2}>
            <Card header={{ heading: 'Nested Card' }} surface={3}>
              Nested Card
            </Card>
          </Card>
          <Card surface={2}>Nested Card</Card>

          <Row>
            <Button
              icon="ArrowCounterClockwiseIcon"
              variant="secondary"
              className={styles.undoButton}
            />
            <Button icon="FloppyDiskIcon" label="Save" variant="secondary" />
          </Row>
        </Card>

        <Card>
          <Button label="Large" size="large" variant="secondary" />
          <Button icon="FloppyDiskIcon" label="Save" variant="secondary" />
        </Card>

        <Card
          header={{
            heading: 'Nested Card 1',
            buttons: [
              {
                label: 'Click Me',
                variant: 'secondary',
              },
              {
                icon: 'PencilIcon',
                variant: 'secondary',
              },
            ],
          }}
          surface={1}
        >
          <div className={styles.text}>
            This is Lorum Ipsum Text, so I'm going to write a long sentence full of random shite,
            look at me go bro. I'm now long enought to wrap and fill multiple lines, how cool is
            that? I actually need to fill more lines, so I'm going to write some more.
          </div>
          <Card
            header={{
              heading: 'Nested Card 2',
              buttons: [
                {
                  label: 'Click Me',
                  variant: 'secondary',
                },
                {
                  icon: 'PencilIcon',
                  variant: 'secondary',
                },
              ],
            }}
            surface={2}
          >
            This is Lorum Ipsum Text, so I'm going to write a long sentence full of random shite,
            look at me go bro. I'm now long enought to wrap and fill multiple lines, how cool is
            that? I actually need to fill more lines, so I'm going to write some more.
            <Card
              header={{
                heading: 'Nested Card 3',
                buttons: [
                  {
                    label: 'Click Me',
                    variant: 'secondary',
                  },
                  {
                    icon: 'PencilIcon',
                    variant: 'secondary',
                  },
                ],
              }}
              surface={3}
            >
              This is Lorum Ipsum Text, so I'm going to write a long sentence full of random shite,
              look at me go bro. I'm now long enought to wrap and fill multiple lines, how cool is
              that? I actually need to fill more lines, so I'm going to write some more.
            </Card>
          </Card>
        </Card>
      </div>
    </>
  );
};
