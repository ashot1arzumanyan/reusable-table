import { GlobalState } from '../store'
import UserSelectors from '../user/userSelectors';

const users1 = [
  {
    id: 1,
    firstName: "Kris",
    lastName: "A",
    age: 20,
  },
  {
    id: 2,
    firstName: "racks",
    lastName: "jacson",
    age: 21,
  },
  {
    id: 3,
    firstName: "Adam",
    lastName: "Yeva",
    age: 46,
  },
];

const users2 = [
  {
    id: 1,
    firstName: "Kris",
    lastName: "A",
    age: 20,
  },
  {
    id: 2,
    firstName: "racks",
    lastName: "jacson",
    age: 28,
  },
  {
    id: 3,
    firstName: "Adam",
    lastName: "Yeva",
    age: 46,
  },
  {
    id: 5,
    firstName: "jone",
    lastName: "mac",
    age: 51,
  },
  {
    id: 6,
    firstName: "racks",
    lastName: "jacson",
    age: 21,
  },
  {
    id: 7,
    firstName: "denial",
    lastName: "roast",
    age: 46,
  },
];

describe('userSelectors', () => {
  test('users, usersLength, usersByPage, pagesCount methods', () => {
    const mockGlobalState: Partial<GlobalState> = {
      user: {
        users: [
          {
            id: 1,
            firstName: "Kris",
            lastName: "A",
            age: 20,
          },
          {
            id: 2,
            firstName: "racks",
            lastName: "jacson",
            age: 21,
          },
          {
            id: 3,
            firstName: "Adam",
            lastName: "Yeva",
            age: 46,
          },
        ]
      },
      pagination: {
        pageContentAmount: 2,
        page: 2,
      },
      sorting: {
        firstName: 0,
        lastName: 0,
        age: 1
      },
      search: {
        search: ''
      }
    };

    const users = [
      {
        id: 3,
        firstName: "Adam",
        lastName: "Yeva",
        age: 46,
      },
      {
        id: 1,
        firstName: "Kris",
        lastName: "A",
        age: 20,
      },
      {
        id: 2,
        firstName: "racks",
        lastName: "jacson",
        age: 21,
      },
    ]

    const result = UserSelectors.users(mockGlobalState);
    expect(result).toEqual(users);
  
    const usersLength = UserSelectors.usersLength(mockGlobalState);
    expect(usersLength).toEqual(3);
  
    const usersByPage = UserSelectors.usersByPage(mockGlobalState);
    expect(usersByPage).toEqual([users.pop()]);
  
    const pagesCount = UserSelectors.pagesCount(mockGlobalState);
    expect(pagesCount).toEqual(2);
  });

  test('usersFilteredBySearch', () => {
    const mockGlobalState1: Partial<GlobalState> = {
      user: {
        users: users1,
      },
      pagination: {
        pageContentAmount: 5,
        page: 1,
      },
      search: {
        search: 'RA'
      }
    };

    const mockGlobalState2: Partial<GlobalState> = {
      user: {
        users: users1,
      },
      pagination: {
        pageContentAmount: 5,
        page: 1,
      },
      search: {
        search: 'adam'
      }
    };

    const mockGlobalState3: Partial<GlobalState> = {
      user: {
        users: users1,
      },
      pagination: {
        pageContentAmount: 2,
        page: 1,
      },
      search: {
        search: 'racks'
      },
      sorting: {
        firstName: 1,
        lastName: 0,
        age: 0,
      }
    };
    const result1 = UserSelectors.usersFilteredBySearch(mockGlobalState1);
    expect(result1).toEqual([mockGlobalState1.user?.users[1]]);

    const result2 = UserSelectors.usersFilteredBySearch(mockGlobalState2);
    expect(result2).toEqual([mockGlobalState2.user?.users[2]]);

    const result3 = UserSelectors.usersFilteredBySearch(mockGlobalState3);
    expect(result3).toEqual([]);
  });

  it('should return users in ascending order by firstName of page 1', () => {
    const mockGlobalState: Partial<GlobalState> = {
      user: {
        users: users2,
      },
      pagination: {
        pageContentAmount: 3,
        page: 1,
      },
      search: {
        search: ''
      },
      sorting: {
        firstName: 0,
        lastName: 0,
        age: 0,
      }
    };

    const result = UserSelectors.usersSorted(mockGlobalState);
    const expected = [
      mockGlobalState.user?.users[2],
      mockGlobalState.user?.users[5],
      mockGlobalState.user?.users[3],
    ]
    expect(result).toEqual(expected);
  });

  test('should return users in ascending order by firstName of page 2', () => {
    const mockGlobalState: Partial<GlobalState> = {
      user: {
        users: users2,
      },
      pagination: {
        pageContentAmount: 3,
        page: 2,
      },
      search: {
        search: ''
      },
      sorting: {
        firstName: 0,
        lastName: 0,
        age: 0,
      }
    };

    const result = UserSelectors.usersSorted(mockGlobalState);
    const expected = [
      mockGlobalState.user?.users[0],
      mockGlobalState.user?.users[1],
      mockGlobalState.user?.users[4],
    ]
    expect(result).toEqual(expected);
  });

  test('should return users in descending order by firstName of page 1', () => {
    const mockGlobalState: Partial<GlobalState> = {
      user: {
        users: users2,
      },
      pagination: {
        pageContentAmount: 3,
        page: 1,
      },
      search: {
        search: ''
      },
      sorting: {
        firstName: -1,
        lastName: 0,
        age: 0,
      }
    };

    const result = UserSelectors.usersSorted(mockGlobalState);
    const expected = [
      mockGlobalState.user?.users[3],
      mockGlobalState.user?.users[5],
      mockGlobalState.user?.users[2],
    ]
    expect(result).toEqual(expected);
  });

  test('should return users in ascending order by lastName of page 1', () => {
    const mockGlobalState: Partial<GlobalState> = {
      user: {
        users: users2,
      },
      pagination: {
        pageContentAmount: 3,
        page: 1,
      },
      search: {
        search: ''
      },
      sorting: {
        firstName: 0,
        lastName: 1,
        age: 0,
      }
    };

    const result = UserSelectors.usersSorted(mockGlobalState);
    const expected = [
      mockGlobalState.user?.users[3],
      mockGlobalState.user?.users[5],
      mockGlobalState.user?.users[2],
    ]
    expect(result).toEqual(expected);
  });

  test('should return users in ascending order by ag of page 1', () => {
    const mockGlobalState: Partial<GlobalState> = {
      user: {
        users: users2,
      },
      pagination: {
        pageContentAmount: 3,
        page: 1,
      },
      search: {
        search: ''
      },
      sorting: {
        firstName: 0,
        lastName: 0,
        age: -1,
      }
    };

    const result = UserSelectors.usersSorted(mockGlobalState);
    const expected = [
      mockGlobalState.user?.users[2],
      mockGlobalState.user?.users[5],
      mockGlobalState.user?.users[3],
    ]
    expect(result).toEqual(expected);
  });

  test('should return users in descending order by ag of page 2', () => {
    const mockGlobalState: Partial<GlobalState> = {
      user: {
        users: users2,
      },
      pagination: {
        pageContentAmount: 3,
        page: 2,
      },
      search: {
        search: ''
      },
      sorting: {
        firstName: 0,
        lastName: 0,
        age: 1,
      }
    };

    const result = UserSelectors.usersSorted(mockGlobalState);
    const expected = [
      mockGlobalState.user?.users[1],
      mockGlobalState.user?.users[4],
      mockGlobalState.user?.users[0],
    ]
    expect(result).toEqual(expected);
  });
});
