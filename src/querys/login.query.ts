import { socketConnection } from "../common/socketConnection";

const client = socketConnection();

export const loginQuery = (data: { userName: string; password: string }) => {
  return client
    .iterate({
      query: `
        query($userName : String!, $password : String!) {
            login(userName : $userName, password : $password) {
            id
            userName
            }
        }
        `,
      variables: data,
    })
    .next();
};
