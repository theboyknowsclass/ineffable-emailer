import { Context, APIGatewayProxyEvent } from "aws-lambda";

export type ApiResponse = {
  statusCode: number;
  body: string;
};

export default function handler(
  lambda: (evt: APIGatewayProxyEvent, context: Context) => Promise<ApiResponse>
) {
  return async function (event: APIGatewayProxyEvent, context: Context) {
    let body, statusCode;

    try {
      // Run the Lambda
      const response = await lambda(event, context);
      body = response.body;
      statusCode = response.statusCode;
    } catch (error) {
      statusCode = 500;
      body = JSON.stringify({
        error: error instanceof Error ? error.message : String(error),
      });
    }

    // Return HTTP response
    return {
      body,
      statusCode,
    };
  };
}
