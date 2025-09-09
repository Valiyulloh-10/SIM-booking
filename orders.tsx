import { List, Datagrid, TextField } from 'react-admin';

export const OrderList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="customer_name" />
      <TextField source="customer_email" />
      <TextField source="status" />
    </Datagrid>
  </List>
);
