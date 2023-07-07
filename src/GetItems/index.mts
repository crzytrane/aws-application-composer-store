import { Handler } from "aws-lambda";

export const handler: Handler<object, object> = async (event) => {
  // Log the event argument for debugging and for use in local development.
  // process.env.args
  console.log(JSON.stringify(event, undefined, 2));

  return {};
};
