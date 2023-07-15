import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/card";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={()=> setAlertVisibility(false)}>
          this is my
          <strong>
            <i>alert</i>
          </strong>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="warning">
        click me
      </Button>

      <Card></Card>
    </div>
  );
}

export default App;
