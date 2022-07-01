import Router from "next/router";

export const handleNavigate = (url: string) => {
  Router.push(url);
};
