import { Add } from "lcx-design-icon";
import { Button, Toast } from "lcx-design";
function App() {
  const handleBtnClick = () => {
    Toast.show();
  };
  return (
    <div>
      111
      <Button onClick={handleBtnClick}>添加了一个button</Button>
      <Add />
    </div>
  );
}

export default App;
