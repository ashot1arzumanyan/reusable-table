import * as React from "react";

import { useAppSelector } from "../store/hooks";
import UserSelectors from "../store/user/userSelectors";

const TableBody = () => {
  const users = useAppSelector(UserSelectors.usersSorted);

  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.age}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
