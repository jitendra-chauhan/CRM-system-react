import { socketConnection } from "../common/socketConnection";

const client = socketConnection();

export const getAllUserQuery = () => {
  return client
    .iterate({
      query: `
            { getAllUsers{
                id
                userName
                firstName
                lastName
                role
            }}
        `,
      //   variables: data,
    })
    .next();
};
