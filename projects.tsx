import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ProjectList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="slug" />
      <TextField source="short_description" />
    </Datagrid>
  </List>
);

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="slug" />
      <TextInput source="short_description" />
      <TextInput source="content" multiline />
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="slug" />
      <TextInput source="short_description" />
      <TextInput source="content" multiline />
    </SimpleForm>
  </Create>
);
