export type TUser = {
  userName: string;
  email: string;
  password: string;
};

/* sidebar */

import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type FieldType = {
  email?: string;
};

export type MessageModel = {
  message: string;
  sentTime: string;
  sender: string;
  direction: string; // Add direction property
  position: number; // Add position property
};

export type ServicesProps = {
  title: string;
  description: string;
  exploreText: string;
  services: string[];
  video: string;
  class: string;
};
