export type UserType = {
  input: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    age: number;
    createdAt: string;
    profileAvatar: string;
    aboutMe: string;
    websiteUrl: string;
    number: string;
    email: string;
    password: string;
  };
  user: { username: string; email: string; id: number };
};

export type EventType = {
  input: {
    eventData: {
      eventName: string;
      description: string;
      date: Date;
      price: number;
      ageGroup: string;
      attendees?: number;
      maxAttendees: number;
    };
    eventImages: [{ imageLink: string }];
    eventAddress: {
      first_line: string;
      secondLine?: string;
      city: string;
      latitude: number;
      longitude: number;
      postcode: string;
    };
  };
};
