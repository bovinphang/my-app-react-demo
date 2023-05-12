import React, { useState } from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserData {
  id: number;
  name: string;
}

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchUserData: builder.query<UserData, void>({
      query: () => "/users/1",
    }),
    saveUserData: builder.mutation<void, UserData>({
      query: ({ id, name }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { id, name },
      }),
    }),
  }),
});

export const { useFetchUserDataQuery, useSaveUserDataMutation } = userApi;

export default function Example() {
  const [name, setName] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const { data: userData } = useFetchUserDataQuery();
  //const userMutation = useSaveUserDataMutation<UserData>({ id: 1, name: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsDirty(true);
  };

  const handleSaveData = () => {
    //userMutation.mutate({ id: userData?.id, name });
    setIsDirty(false);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      {isDirty && userData && <button onClick={handleSaveData}>Save</button>}
    </div>
  );
}
