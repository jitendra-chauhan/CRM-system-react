import { socketConnection } from "../common/socketConnection";

const client = socketConnection();

export const dashBoardCountQuery = (data: { id: string | null }) => {
  return client
    .iterate({
      query: `
      mutation dashBoardCount($id:String!)  
      { 
        dashBoardCount (id:$id)
            {
                userCount
            }
        }
        `,
      variables: data,
    })
    .next();
};
