import withPage from '../src/shared/HOCs/page';
import AppBar from 'material-ui/AppBar';
const AppBarExampleIcon = () => (
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  );
  
const Page = () => <h2>React!</h2>;

export default withPage(AppBarExampleIcon);