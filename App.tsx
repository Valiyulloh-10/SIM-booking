import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { ProjectList, ProjectEdit, ProjectCreate } from './projects';
import { OrderList } from './orders';

const dataProvider = simpleRestProvider('http://localhost:3001/api/admin');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} />
    <Resource name="orders" list={OrderList} />
  </Admin>
);

export default App;
