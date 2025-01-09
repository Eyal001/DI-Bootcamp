import { ReactElement } from "react";

interface GreetingI {
  name: string;
  messageCount: number;
}

const Greeting = ({ name, messageCount }: GreetingI): ReactElement => {
  return (
    <h3>
      {name} - {messageCount}
    </h3>
  );
};
export default Greeting;
