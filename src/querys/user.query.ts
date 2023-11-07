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
export const addUserQuery = (data: {
  userName: string;
  firstName: string;
  lastName: string;
}) => {
  return client
    .iterate({
      query: `
      mutation addUser($userName:String!,$firstName:String!,$lastName:String!)  
      { 
            addUser (userName:$userName,firstName:$firstName,lastName:$lastName)
            {
                id
                userName
                firstName
                lastName
                role
            }
        }
        `,
      variables: data,
    })
    .next();
};
